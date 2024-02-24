import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  text-align: center;

  background-color: ${({theme, dark}) => dark ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK_400};
  color: ${({theme, dark}) => dark ? theme.COLORS.PINK_400 : theme.COLORS.BACKGROUND_800};

  padding: 1.6rem 3.2rem;
  border-radius: .8rem;
`;