import React, { useState } from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";
import ITarefa from "../../interfaces/ITarefa";
import { v4 as uuidv4 } from "uuid";

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Formulario = ({ setTarefas }: FormularioProps) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
};

// class Formulario extends React.Component<{
//   setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
// }> {
//   state = {
//     tarefa: "",
//     tempo: "00:00",
//   };

//   adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     this.props.setTarefas((tarefasAntigas) => [
//       ...tarefasAntigas,
//       { ...this.state,
//         selecionado: false,
//         completado: false,
//         id: uuidv4() },
//     ]);
//     this.setState({
//       tarefa: "",
//       tempo: "00:00",
//     });
//   }

//   render() {
//     return (
//       <form
//         className={styles.novaTarefa}
//         onSubmit={this.adicionarTarefa.bind(this)}
//       >
//         <div className={styles.inputContainer}>
//           <label htmlFor="tarefa">Adicione um novo estudo</label>
//           <input
//             type="text"
//             name="tarefa"
//             value={this.state.tarefa}
//             onChange={(e) =>
//               this.setState({ ...this.state, tarefa: e.target.value })
//             }
//             id="tarefa"
//             placeholder="O que você quer estudar?"
//             required
//           />
//         </div>
//         <div className={styles.inputContainer}>
//           <label htmlFor="tempo">Tempo</label>
//           <input
//             type="time"
//             step="1"
//             name="tempo"
//             value={this.state.tempo}
//             onChange={(e) =>
//               this.setState({ ...this.state, tempo: e.target.value })
//             }
//             id="tempo"
//             min="00:00:00"
//             max="01:30:00"
//             required
//           />
//         </div>
//         <Botao type="submit">Adicionar</Botao>
//       </form>
//     );
//   }
// }

export default Formulario;