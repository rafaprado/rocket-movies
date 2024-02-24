import { FaArrowLeft } from "react-icons/fa6";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { TextButton } from "../../components/TextButton";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/Textarea";
import { NewItem } from "../../components/NewItem";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <TextButton to="/">
            <FaArrowLeft />
            <span>Voltar</span>
          </TextButton>

          <PageTitle>Novo filme</PageTitle>
        </header>

        <form>
          <div className="input-group">
            <Input type="text" placeholder="Título" />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>

          <TextArea placeholder="Observações"></TextArea>

          <section>
            <h2>Marcadores</h2>

            <div className="tags">
              <NewItem value="React" />
              <NewItem isNew={true} placeholder="Novo marcador" />
            </div>
          </section>

          <footer>
            <Button dark="true">Excluir Filme</Button>
            <Button>Salvar Alterações</Button>
          </footer>
        </form>
      </main>
    </Container>
  )
}