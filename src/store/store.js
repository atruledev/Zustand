import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = (set) => ({
  todo: [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Tailwind CSS" },
  ],
  addtoodo: (todo) => {
    set((state) => ({
      todo: [...state.todo, todo],
    }));
  },

  removetodo: (todoId) => {
    set((state) => ({
      todo: state.todo.filter((f) => f.id !== todoId),
    }));
  },
  updatetodo: (todoId, updatedItem) => {
   
    set((state) => ({
      todo: state.todo.map((item) =>
        item.id === todoId ? { ...item, text:updatedItem } : item
      ),
    }));
  },
});

const UseStore = create(
  devtools(useStore, {
    name: "todo",
  })
);

export default UseStore;
