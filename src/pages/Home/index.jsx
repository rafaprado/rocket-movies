import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { PageTitle } from "../../components/PageTitle";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa6";

export function Home() {
  const { user } = useAuth();

  console.log(user);

  return(
    <Container>
      <Header />

      <main>
        <div>
          <PageTitle>Meus filmes</PageTitle>
          <Button to="/new" icon={<FaPlus />}>Adicionar filme</Button>
        </div>

        <MovieCard to="/details/1" title="Interestellar" rating={2} tags={["Ficção científica", "Drama", "Família"]}>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
        </MovieCard>

        <MovieCard to="/details/1" title="Interestellar" rating={2} tags={["Ficção científica", "Drama", "Família"]}>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
        </MovieCard>

        <MovieCard to="/details/1" title="Interestellar" rating={2} tags={["Ficção científica", "Drama", "Família"]}>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
        </MovieCard>
      </main>
    </Container>
  )
}