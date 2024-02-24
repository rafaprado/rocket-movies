import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <main>
        <Form>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>

          <Input type="text" icon={<FiUser />} placeholder="Nome" />
          <Input type="email" icon={<FiMail />} placeholder="E-mail" />
          <Input type="password" icon={<FiLock />} placeholder="Senha" />

          <Button>Entrar</Button>
        </Form>

        <TextButton to="/">
          <FiArrowLeft />
          Voltar para o login
        </TextButton>
      </main>

      <Background />
    </Container>
  )
}