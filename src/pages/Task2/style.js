import styled from "styled-components";

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background: rgb(250, 162, 75);
  background: linear-gradient(
    90deg,
    rgba(250, 162, 75, 1) 0%,
    rgba(253, 107, 57, 1) 100%
  );
  height: 50vh;
  margin-top: 3vh;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: 70vw;
  }
`;
