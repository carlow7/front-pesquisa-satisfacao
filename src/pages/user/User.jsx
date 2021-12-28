import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Detalhes Conta</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">Carleson Kalebe</span>
              <span className="userShowUserTitle">Analista T.i JR</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">carlow7</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">30.11.2001</span>
            </div>
            <span className="userShowTitle">Contato</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">92 984369882</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">carleson@amazoncopy.com.br</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Manaus - Amazonas</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar Usuario</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Sobrenome</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fone</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Atualização</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
