import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
      </div>
    </>
  );
}

export default Layout;
