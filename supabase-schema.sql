-- Supabase Database Schema
-- Copy and paste this entire file into your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE RESTRICT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  total_price DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS users_clerk_id_idx ON public.users(clerk_id);
CREATE INDEX IF NOT EXISTS users_email_idx ON public.users(email);
CREATE INDEX IF NOT EXISTS orders_user_id_idx ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS orders_product_id_idx ON public.orders(product_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON public.orders(status);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own data"
  ON public.users FOR SELECT
  USING (auth.uid()::text = clerk_id);

CREATE POLICY "Users can update their own data"
  ON public.users FOR UPDATE
  USING (auth.uid()::text = clerk_id);

-- RLS Policies for products table (public read)
CREATE POLICY "Anyone can view products"
  ON public.products FOR SELECT
  TO public
  USING (true);

-- RLS Policies for orders table
CREATE POLICY "Users can view their own orders"
  ON public.orders FOR SELECT
  USING (user_id IN (SELECT id FROM public.users WHERE clerk_id = auth.uid()::text));

CREATE POLICY "Users can create their own orders"
  ON public.orders FOR INSERT
  WITH CHECK (user_id IN (SELECT id FROM public.users WHERE clerk_id = auth.uid()::text));

CREATE POLICY "Users can update their own orders"
  ON public.orders FOR UPDATE
  USING (user_id IN (SELECT id FROM public.users WHERE clerk_id = auth.uid()::text));

-- Insert sample products (optional)
INSERT INTO public.products (name, description, price, image_url) VALUES
  ('Classic Red', 'Our signature red beverage with bold flavor', 2.99, NULL),
  ('Zero Sugar', 'All the taste, zero sugar', 2.99, NULL),
  ('Max', 'Maximum taste, maximum refreshment', 3.49, NULL),
  ('Diet', 'Light and crisp taste', 2.99, NULL),
  ('Cherry', 'Cherry-flavored refreshment', 3.49, NULL),
  ('Vanilla', 'Smooth vanilla flavor', 3.49, NULL)
ON CONFLICT DO NOTHING;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

COMMENT ON TABLE public.users IS 'User profiles synced with Clerk authentication';
COMMENT ON TABLE public.products IS 'Product catalog with pricing information';
COMMENT ON TABLE public.orders IS 'Customer orders with status tracking';
