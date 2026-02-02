# Pepsi Website

A modern, responsive website built with Next.js 14 and Tailwind CSS, featuring Pepsi's iconic branding.

## Features

- 🎨 Pepsi-themed design with brand colors (#004b93 blue, #e32934 red)
- ⚡ Built with Next.js 14 App Router for optimal performance
- 📱 Fully responsive design using Tailwind CSS
- 🧩 Reusable component architecture
- 🔍 SEO-optimized with Next.js metadata API
- 🎯 TypeScript for type safety

## Pages

- **Home**: Landing page with hero section and feature cards
- **About**: Company history and values
- **Services**: Product offerings and business solutions
- **Contact**: Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd App
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/              # App Router pages and layouts
│   ├── layout.tsx    # Root layout with Navbar/Footer
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── services/     # Services page
│   └── contact/      # Contact page
├── components/       # Reusable React components
│   ├── Navbar.tsx    # Navigation component
│   ├── Footer.tsx    # Footer component
│   ├── Hero.tsx      # Hero section
│   ├── Button.tsx    # Reusable button
│   └── Card.tsx      # Reusable card
└── globals.css       # Global styles and Tailwind imports
```

## Brand Colors

- **Pepsi Blue**: #004b93
- **Pepsi Red**: #e32934
- **Light Blue**: #0063be
- **Dark Blue**: #003366

## Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## License

This is a demo project for educational purposes.

## Contributing

This is a demonstration project. Feel free to use it as a template for your own projects.

---

Built with ❤️ using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
