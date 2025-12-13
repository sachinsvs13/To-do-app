import "../Styles/Home.css";
import { IoSunnyOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { BsSortAlphaDown } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <div className="setting">
        <div className="left-setting">
          <h3 className="top">
            <IoSunnyOutline className="icon" />
            My Day
          </h3>
          <button className="top">
            <LuLayoutGrid className="icon" />
            Grid
          </button>
          <button className="top">
            <CiCircleList className="icon" />
            List
          </button>
        </div>
        <div className="left-setting">
          <button className="top">
            <BsSortAlphaDown className="icon" />
            Sort
          </button>
        </div>
      </div>
      <div>
        <input type="text"/>
      </div>
    </main>
  );
}
