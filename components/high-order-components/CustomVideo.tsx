const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/my-portfolio";

interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export const CustomVideo = ({
  src,
  poster = "",
  ...props
}: CustomVideoProps) => {
  const finalSrc = src.startsWith("http")
    ? src
    : `${BASE_PATH}${src.startsWith("/") ? src : `/${src}`}`;

  return <video src={finalSrc} poster={`${BASE_PATH}/${poster}`} {...props} />;
};
