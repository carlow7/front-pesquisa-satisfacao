import "./prench.css";
import { Link } from "react-router-dom";
import {Alert} from "@mui/material"
import {AlertTitle} from '@mui/material';
import {Home} from '@mui/icons-material';



export default function PrenchUser() {
  return (
    <div className="prenchUser">
      <h1 className="prenchUserTitle">Avaliação Técnica</h1>
      <form className="prenchUserForm">
        <div className="prenchUserItem">
          <label>Nome do Técnico</label>
          <input type="text" placeholder="" />
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
          <label>Codigo do Chamado</label>
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
