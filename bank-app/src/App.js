import "./App.css";
import { Header } from "./components/Header";
import { Accounts } from "./components/Accounts";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "76vh" }}>
        <Routes>
          <Route path="/" element={<Accounts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
