import "./sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Storefront from "@material-ui/icons/Storefront";
import AttachMoney from "@material-ui/icons/AttachMoney";
import BarChart from "@material-ui/icons/BarChart";
import MailOutline from "@material-ui/icons/MailOutline";
import DynamicFeed from "@material-ui/icons/DynamicFeed";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import Timeline from "@material-ui/icons/Timeline";
import Report from "@material-ui/icons/Report";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Side Bar menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
        
          </ul>
        </div>
        {/* Quick menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
         
      
          </ul>
        </div>
      
        {/* Staff */}
   
      </div>
    </div>
  );
}

export default Sidebar;
