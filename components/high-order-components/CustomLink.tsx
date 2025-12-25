const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/my-portfolio";

interface CustomLinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
}

export const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  {
    children && (
      <a href={`${BASE_PATH}/${href}`} {...props}>
        {children}
      </a>
    );
  }
};
