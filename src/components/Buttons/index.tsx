import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/features/nextPageSlice";
import styles from "./styles.module.scss";

function Buttons() {
  const dispatch = useDispatch();

  function next() {
    dispatch(increment());
  }
  function prev() {
    dispatch(decrement());
  }

  return (
    <div className={styles.containerButtons}>
      <button onClick={prev}>página anterior</button>
      <button onClick={next}>próxima pagina</button>
    </div>
  );
}

export default Buttons;
