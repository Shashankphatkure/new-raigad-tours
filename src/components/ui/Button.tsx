import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-7 py-4 text-small font-semibold tracking-wide transition duration-200 ease-out hover:-translate-y-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-dark hover:shadow-soft",
  accent: "bg-saffron text-cream hover:bg-saffron-dark hover:shadow-soft",
  secondary:
    "border border-brown text-brown hover:border-forest hover:text-forest hover:shadow-soft",
  ghost:
    "text-brown underline decoration-brown/30 underline-offset-4 hover:text-saffron hover:decoration-saffron",
  inverse:
    "border border-cream text-cream hover:bg-cream hover:text-brown hover:shadow-soft",
};

type LinkButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href: string;
};

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: undefined;
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children, ...domProps } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...domProps}>
      {children}
    </button>
  );
}
