import { Container, Profile } from "./styles";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <Link to="/">
        <img src={logo} />
      </Link>

      <Input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>Rafael Prado</strong>
          </Link>

          <Link to="#">sair</Link>
        </div>

        <Link to="/profile">
          <img src="https://github.com/rafaprado.png" />
        </Link>
      </Profile>
    </Container>
  )
}