import Header from "../Components/Header";
import PagesNavigation from "../Components/PagesNavigation";
import Home from "./home";

export default function Tasks() {
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