import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 1rem;

  background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({theme, $isNew}) => $isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none"};

  padding-right: 1.6rem;
  
  > input {
    padding: 1.6rem;
    border: none;
    background: transparent;

    width: auto;

    color: ${({theme, $isNew}) => $isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
  }

  > button {
    border: none;
    background: transparent;

    svg {
      color: ${({theme}) => theme.COLORS.PINK_400};
    }
  }
`;