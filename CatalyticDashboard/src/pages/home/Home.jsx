import "./home.css";
import {userData} from "../../dummyData";

import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React from 'react'
function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title={"User Analytics"}
        dataKey={"Active User"}
        grid
      />
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

export default Home;
