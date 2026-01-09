import Header from "../Components/Header";
import PagesNavigation from "../Components/PagesNavigation";
import Home from "./home";

export default function Planned() {
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