import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "blue" | "red";
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  children,
  variant = "blue",
  onClick,
  type = "button"
}: ButtonProps) {
  const className = variant === "red" ? "pepsi-button-red" : "pepsi-button";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
