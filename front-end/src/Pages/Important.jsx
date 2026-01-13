import Header from "../Components/Header";
import PagesNavigation from "../Components/PagesNavigation";
import Home from "./home";

export default function Important() {
  return (
    <>
      <Header />
      <div className="side">
        <PagesNavigation />
        <Home settingColor = "#e14e4e"/>
      </div>
    </>
  );
}
