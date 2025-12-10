import Link from "next/link";

export const CustomLogo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
    >
      {"<Javi/>"}
    </Link>
  );
};
