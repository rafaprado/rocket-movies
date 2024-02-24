import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 14.4rem auto;
  height: 100vh;
  grid-template-areas: 
  "header" 
  "content";

  > header {
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.PINK_100};
    padding: 0 14rem;
  }

  > main {
    width: 34rem;
    margin: -9rem auto;

    .profile-pic {
      position: relative;
      display: flex;
      justify-content: center;

      margin-bottom: 6.4rem;
    }

    .profile-pic > img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
    }

    .profile-pic > label {
      position: absolute;
      right: 8rem;
      bottom: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 4.8rem;
      height: 4.8rem;

      border-radius: 50%;
      border: none;
      background-color: ${({theme}) => theme.COLORS.PINK_400};

      color: ${({theme}) => theme.COLORS.BACKGROUND_600};
      cursor: pointer;

      transition: filter .3s;

      &:hover {
        filter: brightness(.9);
      }
    }

    .profile-pic input {
      display: none;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      > div:nth-child(2n) {
        margin-bottom: 2.4rem;
      }
    }
  }
`;