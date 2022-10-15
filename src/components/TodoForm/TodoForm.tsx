import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../../App'
import styles from "./TodoForm.module.css";

interface TodoFormProps {
  handleSetNewTodo: (newTodo: Todo) => void;
}

export function TodoForm({
  handleSetNewTodo,
}: TodoFormProps) {
  const [newTodoContentText, setNewTodoContentText] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuidv4(),
      isChecked: false,
      content: newTodoContentText,
    };

    handleSetNewTodo(newTodo);
    setNewTodoContentText("");
  }

  function handleNewTodoInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoContentText(event.target.value);
  }

  function handleNewTodoInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTodoContentEmpty = newTodoContentText.length === 0;

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.todoForm}>
      <input
        required
        onChange={handleNewTodoInputChange}
        type={"text"}
        placeholder={"Adicione uma nova tarefa"}
        onInvalid={handleNewTodoInputInvalid}
        value={newTodoContentText}
      />

      <button type="submit" disabled={isNewTodoContentEmpty}>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
