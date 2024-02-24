import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock } from "react-icons/fi";

export function Login() {
  return (
    <Container>
      <main>
        <Form>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>

          <Input type="email" icon={<FiMail />} placeholder="E-mail" />
          <Input type="password" icon={<FiLock />} placeholder="Senha" />

          <Button>Entrar</Button>
        </Form>

        <TextButton to="/register">
          Criar conta
        </TextButton>
      </main>

      <Background />
    </Container>
  )
}