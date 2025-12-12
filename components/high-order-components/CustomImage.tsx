const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/my-portfolio";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export function CustomImage({ src, ...props }: CustomImageProps) {
  const finalSrc = src.startsWith("http")
    ? src
    : `${BASE_PATH}${src.startsWith("/") ? src : `/${src}`}`;

  return <img src={finalSrc} {...props} />;
}
