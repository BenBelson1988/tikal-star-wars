import styled from "styled-components";

export const TableTask1 = styled.div`
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
    height: 25vh;
  }
`;

export const TableColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  border-top: 1px solid;
  border-bottom: 1px solid;
  font-size: 3vmin;
`;
