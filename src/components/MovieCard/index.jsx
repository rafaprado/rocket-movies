import { Container } from "./styles";
import { RatingStars } from "../RatingStars";
import { v4 as uuidv4 } from 'uuid';
import { Tag } from "../Tag";

export function MovieCard({title, rating, tags, children, ...rest}) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>

      <div className="rating">
        <RatingStars size={12} initialValue={rating} readonly/>
      </div>

      <p>
        {children}
      </p>

      <div className="tags">
        {
          tags && tags.map(tag => <Tag key={uuidv4()}>{tag}</Tag>)
        }
      </div>
    </Container>
  );
}