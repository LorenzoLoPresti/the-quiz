import { FC } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import Main from "../template/Main";

// Layout dell'app. Header e footer sono fissi, Main cambierà
// il suo contenuto in base alla pagina
const AppLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full px-5 pb-3 pt-5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppLayout;
