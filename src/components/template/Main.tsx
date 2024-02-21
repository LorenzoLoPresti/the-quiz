import { Outlet } from "react-router-dom";
import Section from "../atoms/Section";

// Outlet è un componente di react-router-dom che renderizza
// il componente associato all'url
const Main = () => {
  return (
    <Section as="main">
      <Outlet />
    </Section>
  );
};
export default Main;
