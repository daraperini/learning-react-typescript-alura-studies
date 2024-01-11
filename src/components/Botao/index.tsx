import React from "react";
import styles from "./Botao.module.scss";

interface BotaoProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Botao = ({children, type, onClick}: BotaoProps) => {
  return (
    <button onClick={onClick} type={type} className={styles.botao}>
      {children}
    </button>
  );
}

// class Botao extends React.Component<{
//   children: React.ReactNode;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
// }> {
//   render() {
//     const { type = "button", onClick } = this.props;

//     return (
//       <button onClick={onClick} type={type} className={styles.botao}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Botao;
