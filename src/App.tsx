import { FormEvent, useState } from "react";
import { ClipboardText } from "phosphor-react";

import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoCount } from "./components/TodoCount/TodoCount";
import { TodoCompleted } from "./components/TodoCompleted/TodoCompleted";
import { TodoCard, TodoCardProps } from "./components/TodoCard/TodoCard";

import styles from "./App.module.css";
import "./global.css";

export interface Todo {
  id: string;
  isChecked: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSetNewTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodoCheck(todo: Todo) {
    const newArrTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          id: item.id,
          isChecked: !item.isChecked,
          content: item.content,
        };
      } else {
        return item;
      }
    });

    setTodos(newArrTodos);
  }

  function handleTodosCompleted() {
    const todosCompleted = todos.filter((todo) => {
      return todo.isChecked == true;
    });

    return todosCompleted.length;
  }

  function handleDeleteTodo(id: string) {
    const newTodoArr = todos.filter((todo) => todo.id !== id)

    setTodos(newTodoArr);
  }

  return (
    <div>
      <Header />
      <TodoForm handleSetNewTodo={handleSetNewTodo} />

      <main className={styles.wrapper}>
        <div className={styles.todoInfos}>
          <TodoCount count={todos.length} />
          <TodoCompleted
            countTotal={todos.length}
            countCompleted={handleTodosCompleted()}
          />
        </div>

        <div className={styles.todoCards}>
          {todos.length > 0 && (
            <>
              {todos.map((todo) => {
                return (
                  <TodoCard
                    key={todo.content}
                    id={todo.id}
                    isChecked={todo.isChecked}
                    content={todo.content}
                    handleTodoCheck={handleTodoCheck}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              })}
            </>
          )}

          {todos.length === 0 && (
            <div className={styles.withoutTodos}>
              <ClipboardText size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
