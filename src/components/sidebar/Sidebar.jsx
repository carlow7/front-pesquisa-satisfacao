import "./sidebar.css";
import {Home , Stars , AccountBox, Assignment} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Inicio
            </li>
            </Link>
            <li className="sidebarListItem">
              <Stars className="sidebarIcon" />
              Ranking Técnico 
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <AccountBox className="sidebarIcon" />
                 Cadastro Tecnico
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <Assignment className="sidebarIcon" />
                Cadastro Chamado
              </li>
            </Link>
           
        
          </ul>
        </div>
        <div className="sidebarMenu">
 
        </div>
        <div className="sidebarMenu">
    
          <ul className="sidebarList">
           
          </ul>
        </div>
      </div>
    </div>
  );
}
