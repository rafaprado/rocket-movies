import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 12.3rem auto;
  grid-template-areas: 
  "header"
  "content";

  height: 100vh;

  > main {
    grid-area: content;
    padding: 6.4rem 14rem;

    overflow-y: auto;

    scrollbar-color: ${({theme}) => theme.COLORS.PINK_400} ${({theme}) => theme.COLORS.PINK_100};

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 4.8rem;
    }
  }
`;