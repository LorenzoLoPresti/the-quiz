import { FC } from "react";
import Text from "../atoms/Text";

import { useLocation, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const notInMainPage = pathname !== "/";

  function backToMainPage(): void {
    if (notInMainPage) navigate("/");
  }

  const styleIfNotInMainPage = notInMainPage
    ? "cursor-pointer inline-block hover:translate-y-1"
    : "";

  return (
    <nav className="px-3 py-5 text-center ">
      <Text
        as="h1"
        className={styleIfNotInMainPage}
        color="danger"
        onClick={backToMainPage}
      >
        The Quiz
      </Text>
    </nav>
  );
};
export default Navbar;
