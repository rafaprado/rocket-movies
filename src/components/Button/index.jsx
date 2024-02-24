import { Container } from "./styles";

export function Button({ children, icon, ...rest }) {
  return (
    <Container {...rest}>
      { icon && icon }
      {children}
    </Container>
  )
}