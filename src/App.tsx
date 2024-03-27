import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Library from "./routes/library";
import Sidebar from "./components/Sidebar";
import Settings from "./routes/settings";
import Books from "./routes/books";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/books/:bookId" element={<Books />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
