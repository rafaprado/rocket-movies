import styled from "styled-components";

export const Container = styled.span`
  padding: .8rem 1.6rem;
  border-radius: .8rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  font-size: 1.2rem;
`;