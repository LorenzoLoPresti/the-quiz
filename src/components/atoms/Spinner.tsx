import { FC } from "react";
import { BiLoaderAlt } from "react-icons/bi";

type SpinnerProps = {
  variant?: "light" | "secondary";
};

// Stile in base a variant
const style = {
  light: "text-light",
  secondary: "text-secondary",
};

const Spinner: FC<SpinnerProps> = ({ variant = "light" }: SpinnerProps) => {
  const classNames = `${style[variant]} w-14 h-14 md:w-20 md:h-20 animate-spin`;

  return <BiLoaderAlt className={classNames} />;
};

export default Spinner;
