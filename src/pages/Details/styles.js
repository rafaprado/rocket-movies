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

    .movie-description {
      color: ${({theme}) => theme.COLORS.GRAY_100};
      line-height: 150%;

      p + p {
        margin-top: 1.6rem;
      }
    }
  }
`;


export const DatailHeader = styled.header`
  margin-top: 2.4rem;
  margin-bottom: 4rem;

    .author-info, .movie-info {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    .author-info {
      margin-bottom: 4rem;
    }

    .movie-info {
      margin-bottom: 2.4rem;
    }

    .author, .time {
      display: flex;
      align-items: center;
      gap: .8rem;

      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    .author img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_600};
    }

    .time > svg {
      color: ${({theme}) => theme.COLORS.PINK_400};
    }

    .tags {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
`;

