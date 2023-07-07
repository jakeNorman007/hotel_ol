import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import Header from "./Header";

{
  /*
  The outlet is nested in the main tag so that although the pages are different,
  all the pages can have a similar layout. All pages will have both the side bar
  and header.
  */
}

function Layout() {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <SideBar />
      <main className="bg-gray-100 pt-16 pb-[6.4rem] px-[4.8rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
