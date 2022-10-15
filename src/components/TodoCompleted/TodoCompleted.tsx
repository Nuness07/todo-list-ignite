import styles from "./TodoCompleted.module.css";

interface TodoCompletedProps {
  countTotal: Number;
  countCompleted: Number;
}

export function TodoCompleted({
  countTotal,
  countCompleted,
}: TodoCompletedProps) {
  return (
    <div className={styles.todoCompleted}>
      <span>Concluídas</span>
      <p>
        {String(countCompleted)} de {String(countTotal)}
      </p>
    </div>
  );
}
