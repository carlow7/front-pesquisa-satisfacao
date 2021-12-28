import "./newUser.css";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Chamado</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome Empresa</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>CNPJ</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Fone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Descrição do Chamado</label>
          <input type="text" placeholder="" />
          
        </div>
        <div className="newUserItem">
          <label>Setor a Empresa Pertence</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Privado</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Público</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Ativo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
