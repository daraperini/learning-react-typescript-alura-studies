import styles from "./Lista.module.scss";
import Item from "./Item";
import ITarefa from "../../interfaces/ITarefa";

interface ListaProps {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: ListaProps) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => {
          return (
            <Item
              selecionaTarefa = {selecionaTarefa}
              key={tarefa.id}
              {...tarefa}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Lista;
