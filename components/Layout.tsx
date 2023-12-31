import { ReactNode, useContext } from "react";
import { Footer, Footerbar, Main, Navbar } from "./globals";
import { ThemeContext } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col min-h-screen" data-theme={theme}>
        <Navbar />
        <Main className="flex flex-col">
          {children
            ? children
            : "This is a Layout container. Must have children"}
        </Main>
        {/* <Footer className="navbar bg-neutral text-neutral-content"> */}
        <Footer className="">
          <Footerbar />
        </Footer>
      </div>
    </>
  );
}

export default Layout;
