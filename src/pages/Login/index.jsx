import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

  return (
    <Container>
      <main>
        <Form>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>

          <Input type="email" icon={<FiMail />} placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
          <Input type="password" icon={<FiLock />} placeholder="Senha" onChange={event => setPassword(event.target.value)} />

          <Button onClick={handleSignIn}>Entrar</Button>
        </Form>

        <TextButton to="/register">
          Criar conta
        </TextButton>
      </main>

      <Background />
    </Container>
  )
}