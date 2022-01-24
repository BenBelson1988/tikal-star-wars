import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as S from "./style";

export default () => {
  const history = useHistory();
  return (
    <S.Navbar>
      <S.NavbarButton onClick={() => history.push("/task1")}>
        Task1
      </S.NavbarButton>
      <S.NavbarButton onClick={() => history.push("/task2")}>
        Task2
      </S.NavbarButton>
    </S.Navbar>
  );
};
