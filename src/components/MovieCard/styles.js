import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: block;
  width: 100%;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  background-color: ${({theme}) => theme.COLORS.PINK_100};
  border-radius: 1.6rem;

  transition: filter .3s;

  &:hover {
    filter: brightness(.9);
  }

  > h2 {
    margin-bottom: .8rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > .rating {
    margin-bottom: 1.6rem;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-bottom: 2.4rem;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: .8rem;
  }
`;