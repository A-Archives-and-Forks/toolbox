import type React from "react";
import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ImageWrapper: FC<Props> = ({ children }) => {
  return <div className="flex w-full justify-center">{children}</div>;
};
export default ImageWrapper;
