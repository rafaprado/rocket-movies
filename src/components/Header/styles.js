import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  height: 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_600};

  padding: 0 14rem;
  gap: 6.4rem;

  grid-area: header;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  flex-shrink: 0;

  img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_600};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .4rem;

    font-size: 1.4rem;

    a {
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }

    strong {
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-weight: bold;
    }

  }
`;