import "./Styles/App.css";
import Header from "./Components/Header";
import PagesNavigation from "./Components/PagesNavigation";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <Header />
      <div className="side">
        <PagesNavigation />
        <Home />
      </div>
    </>
  );
}

export default App;
