import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useState } from "react";
import ITarefa from "../../interfaces/ITarefa";
import Botao from "../Botao";
import styles from "./Cronometro.module.scss";
import Relogio from "./Relogio";

interface CronometroProps {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado, finalizarTarefa }: CronometroProps) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }

      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  );
};

export default Cronometro;
