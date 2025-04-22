import "./App.css";

//Singleton
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ListPage from "./components/pages/ListPage";
import { Notifications } from "@mantine/notifications";

function App() {
  return (
    <>
      <Notifications />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
