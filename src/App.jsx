import "./App.css";
import NavBar from "./Components/NavBar";
import Routers from "./Route/Routers";

function App() {
  return (
    <div
      className="h-full  min-h-screen px-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(153,147,147,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <NavBar />
      <Routers/>
    </div>
  );
}

export default App;
