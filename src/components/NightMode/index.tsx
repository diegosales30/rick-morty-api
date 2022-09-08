import styles from "./styles.module.scss";
import { toggleMode } from "../../store/features/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

function NightMode() {
  const { css, name } = useSelector((state: RootState) => state.darkmode);

  const dispatch = useDispatch();

  return (
    <div className={styles.containerDarkMode}>
      <button onClick={() => dispatch(toggleMode())}>{name}</button>
    </div>
  );
}

export default NightMode;
