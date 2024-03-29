import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
