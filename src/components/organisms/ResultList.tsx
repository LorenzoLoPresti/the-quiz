import { FC, PropsWithChildren } from "react";

const ResultList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="list-none space-y-9 md:space-y-12 animate-slide-up">
      {children}
    </ul>
  );
};
export default ResultList;
