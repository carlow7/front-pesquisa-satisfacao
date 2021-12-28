import "./prench.css";
import { Link } from "react-router-dom";
import {Alert} from "@mui/material"
import {AlertTitle} from '@mui/material';



export default function PrenchUser() {
  return (
    <div className="prenchUser">
      <h1 className="prenchUserTitle">Avaliação Técnica</h1>
      <form className="prenchUserForm">
        <div className="prenchUserItem">
          <label>Nome do Técnico</label>
          <select className="prenchUserSelect" name="active" id="active">
            <option value="yes">Ajay Ramchandani</option>
            <option value="yes">Alex Mota</option>
            <option value="yes">Davi Simoes</option>
            <option value="yes">Ermerson Rodrigues</option>
            <option value="yes">Jasper Semem</option>
            <option value="yes">Victor Cunha</option>
            <option value="yes">Winston</option>
            <option value="yes">Paulo</option>
          </select>
        </div>
        <div className="prenchUserItem">
          <label> Nome do Cliente</label>
          <input type="text" placeholder="" />
        </div>
        <div className="prenchUserItem">
          <label>Telefone do Cliente</label>
          <input type="text" placeholder="" />
        </div>
        <div className="prenchUserItem">
          <label>Descrição do Chamado</label>
          <input type="text" placeholder="" /> 
        </div>
        <div className="prenchUserItem">
          <label>Nota</label>
          <select className="prenchUserSelect" name="active" id="active">
            <option value="yes">1</option>
            <option value="yes">2</option>
            <option value="yes">3</option>
            <option value="yes">4</option>
            <option value="yes">5</option>
          </select>
        </div>
        <button className="prenchUserButton">Enviar</button>
      </form>
    </div>
  );
    



}
