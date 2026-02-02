import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = ""
}: ButtonProps) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    "outline-light": "btn-outline border-[#f5f3f4] text-[#f5f3f4] hover:bg-[#f5f3f4] hover:text-[#0b090a]"
  };

  const buttonClass = `${variantClasses[variant]} ${className} inline-flex items-center justify-center text-center font-medium`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
