import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Library from "./routes/library";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
