import { FaArrowLeft } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { TextButton } from "../../components/TextButton";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <TextButton to="/">
          <FaArrowLeft />
          Voltar
        </TextButton>
      </header>

      <main>
        <div className="profile-pic">
          <img src="https://github.com/rafaprado.png" alt="" />

          <label htmlFor="picture">
            <input type="file" id="picture" />
            <CiCamera size={20} />
          </label>
        </div>

        <form action="">
          <Input type="text" icon={<FiUser size={20} />} placeholder="Nome" />
          <Input type="email" icon={<FiMail size={20} />} placeholder="E-mail" />
          <Input type="password" icon={<FiLock size={20} />} placeholder="Senha atual" />
          <Input type="password" icon={<FiLock size={20} />} placeholder="Nova senha" />
          <Button>
            Salvar
          </Button>
        </form>
      </main>
    </Container>
  )
}