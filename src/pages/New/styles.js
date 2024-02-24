import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 12.3rem auto;
  height: 100vh;
  grid-template-areas: 
  "header" 
  "content";

  > main {
    grid-area: content;
    padding: 6.4rem 14rem;

    overflow-y: auto;

    scrollbar-color: ${({theme}) => theme.COLORS.PINK_400} ${({theme}) => theme.COLORS.PINK_100};

    > header > a {
      margin-bottom: 2.4rem;
    }

    > form {
      display: flex;
      flex-direction: column;
      row-gap: 4rem;
      margin-top: 4rem;

      .input-group {
        display: flex;
        gap: 2.4rem;
      }

      section > h2 {
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        font-size: 2rem;

        margin-bottom: 2.4rem;
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        padding: 1.6rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border-radius: .8rem;
      }

      footer {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        
        a {
          width: 100%;
          display: block;
        }
      }
    }
  }
`;