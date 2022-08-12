import styled from "styled-components";

import pokeBackground from "../../Assets/home-background.jpg";

export const HomeStyle = styled.div`
  background-image: url(${pokeBackground});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`;
