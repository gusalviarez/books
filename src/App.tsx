import Feed from "./components/feed";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <Navbar />
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
