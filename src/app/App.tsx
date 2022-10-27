import { Navbar, Sidebar } from "../components";
import "../scss/app.scss";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <AppRoutes />
      <Sidebar />
    </div>
  );
};

export default App;
