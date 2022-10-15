import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { Todo } from "../../App";

import styles from "./TodoCard.module.css";

export interface TodoCardProps {
  id: string;
  isChecked: boolean;
  content: string;
  handleTodoCheck: (todo: Todo) => void;
  handleDeleteTodo: (id: string) => void;
}

export function TodoCard({
  isChecked,
  content,
  id,
  handleTodoCheck,
  handleDeleteTodo,
}: TodoCardProps) {
  function handleControlCheckTodo() {
    const todoChecked = {
      id: id,
      isChecked: true,
      content: content,
    };

    handleTodoCheck(todoChecked);
  }

  function handleControlDeleteTodo() {
    handleDeleteTodo(id)
  }

  return (
    <div
      className={`${styles.todoCard} ${isChecked && styles.todoCardChecked}`}
    >
      <CheckboxPrimitive.Root
        checked={isChecked}
        onCheckedChange={() => handleControlCheckTodo()}
        className={styles.todoCardCheckbox}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className={styles.todoCardCheckboxCheckIcon} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <p>{content}</p>

      <button
        onClick={() => handleControlDeleteTodo()}
        className={styles.deleteButton}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}
