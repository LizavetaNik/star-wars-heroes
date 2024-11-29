import React from "react";
import styles from "../../styles/Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      className={styles.buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
