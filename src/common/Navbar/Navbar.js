import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import * as S from "./style";

export default () => {
  const history = useHistory();
  const currentLocation = useLocation().pathname.substring(
    1,
    useLocation().pathname.length
  );
  return (
    <S.Navbar>
      <S.NavbarButton
        active={currentLocation === "task1" ? true : false}
        onClick={() =>
          currentLocation === "task1" ? 0 : history.push("/task1")
        }
      >
        Task1
      </S.NavbarButton>
      <S.NavbarButton
        active={currentLocation === "task2" ? true : false}
        onClick={() =>
          currentLocation === "task2" ? 0 : history.push("/task2")
        }
      >
        Task2
      </S.NavbarButton>
    </S.Navbar>
  );
};
