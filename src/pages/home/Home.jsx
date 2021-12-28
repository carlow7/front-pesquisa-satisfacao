import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Prench from "../../components/pesq/Prench";

export default function Home() {
  return (
    <div className="home">
      < Prench />
      <div className="homeWidgets">
      </div>
    </div>
  );
}
