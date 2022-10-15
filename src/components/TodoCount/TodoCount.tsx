import styles from "./TodoCount.module.css";

interface TodoCountProps {
  count: Number;
}

export function TodoCount({ count }: TodoCountProps) {
  return (
    <div className={styles.todoCount}>
      <span>Tarefas criadas</span>
      <p>{String(count)}</p>
    </div>
  );
}
