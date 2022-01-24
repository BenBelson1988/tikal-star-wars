import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  background: rgb(250, 162, 75);
  background: linear-gradient(
    90deg,
    rgba(250, 162, 75, 1) 0%,
    rgba(253, 107, 57, 1) 100%
  );
  height: 7vh;
  margin-top: 3vh;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
`;

export const NavbarButton = styled.div`
  width: 10vw;
  height: 5vh;
  font-size: 2.5vmin;
  line-height: 5vh;
  border: 2px solid;
  background: rgba(245, 242, 242, 255);
  margin-right: 1vw;
  margin-left: 1vw;
  border-radius: 30px;
  transition: ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;
