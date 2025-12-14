const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/my-portfolio";

interface CustomImageProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const CustomVideo = ({ src, ...props }: CustomImageProps) => {
  const finalSrc = src.startsWith("http")
    ? src
    : `${BASE_PATH}${src.startsWith("/") ? src : `/${src}`}`;

  return <video src={finalSrc} {...props} />;
};
