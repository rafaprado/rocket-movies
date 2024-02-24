import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  width: 100%;
  height: 5.6rem;

  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  padding: 0 2.4rem;

  margin-bottom: .8rem;

  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_500};
  }

  > input {
    height: 100%;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 1.4rem;

    width: 100%;
    background: none;

    font-size: 1.4rem;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }
  }
`;