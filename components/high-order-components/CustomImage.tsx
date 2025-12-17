const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/my-portfolio";
const ENV = process.env.NODE_ENV;

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const generateMobileRoute = (route: string) => {
  try {
    const result = route.split(".");
    result[0] = result[0].concat("-mobile");
    return result.join(".");
  } catch (err) {
    console.error(err);
    return route;
  }
};

export function CustomImage({ src, ...props }: CustomImageProps) {
  const finalSrc = src.startsWith("http")
    ? src
    : `${BASE_PATH}${src.startsWith("/") ? src : `/${src}`}`;

  return (
    <picture>
      {/* TO DO <source
        srcSet={generateMobileRoute(finalSrc)}
        media="(max-width: 640px)"
      /> */}
      <source srcSet={finalSrc} media="(max-width: 1024px)" />
      <img src={finalSrc} {...props} />
    </picture>
  );
}
