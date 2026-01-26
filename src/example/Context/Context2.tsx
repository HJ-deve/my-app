import React from 'react';

import { TodoProvider } from '../../components/ContextExample/context';
import { TodoForm } from '../../components/ContextExample/context/ToDoForm';
import { TodoList } from '../../components/ContextExample/context/ToDoList';

export const Context2 = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};
