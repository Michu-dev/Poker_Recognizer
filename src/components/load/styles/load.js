import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  height: 100vh;

  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Input = styled.input``;

export const Image = styled.img`
  max-width: 70vw;
  max-height: 70vh;
  border: 1px solid white;
`;
