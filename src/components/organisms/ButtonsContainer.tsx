import { FC, PropsWithChildren } from "react";

const ButtonsContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2">{children}</div>
  );
};

export default ButtonsContainer;
