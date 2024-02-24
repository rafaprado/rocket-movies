import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  resize: none;
  border-radius: 1rem;

  color: ${({theme}) => theme.COLORS.GRAY_500};
  padding: 1.6rem;

  border: none;
`;