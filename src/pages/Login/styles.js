import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    flex: 1;
    padding: 0 13rem;

    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 34rem;
  margin-bottom: 4.2rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK_400};
    font-size: 4.8rem;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_500};
    font-size: 1.4rem;
    margin-bottom: 4.8rem;
  }

  > h2 {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 4.8rem;
    font-size: 2.4rem;

    font-weight: 500;
  }

  > a {
    margin-top: 2.4rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;

  flex-shrink: 0;
  filter: brightness(.4);
`;