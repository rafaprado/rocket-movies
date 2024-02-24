import { FaPlus, FaX } from "react-icons/fa6";
import { Container } from "./styles";

export function NewItem({ isNew = false, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input readOnly={!isNew} type="text" {...rest} />

      <button>
        {isNew ? <FaPlus size={24} /> : <FaX size={24} />}
      </button>
    </Container>
  )
}