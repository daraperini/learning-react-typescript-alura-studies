import styles from "./Item.module.scss";
import ITarefa from "../../../interfaces/ITarefa";

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: ItemProps) => {
  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""} ${
        completado ? styles.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <p>{tempo}</p>
      {completado && (
        <span
          className={styles.concluido}
          aria-label="tarefa completada"
        ></span>
      )}
    </li>
  );
};

export default Item;
