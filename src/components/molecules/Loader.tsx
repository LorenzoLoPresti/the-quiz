import { FC } from "react";
import Spinner from "../atoms/Spinner";

const Loader: FC = () => {
  return (
    <div className="spinnerContainer">
      <Spinner />
    </div>
  );
};
export default Loader;
