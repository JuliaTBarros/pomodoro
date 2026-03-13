import {useState} from "react";
import type {Task} from "../domain/Tasks.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    // A tarefa atual é sempre a primeira da fila (índice 0)
    const currentTask = tasks.length > 0 ? tasks[0] : null;

    // Função para adicionar (entra no final da fila)
    const addTask = (title: string) => {
        if (!title.trim()) return;

        const newTask: Task = {
            id: crypto.randomUUID(),
            title: title.trim(),
        };

        setTasks((prev) => [...prev, newTask]);
    };

    // Função para concluir a tarefa atual
    const completeCurrentTask = () =>
        setTasks((prevTasks) => {
            if (prevTasks.length === 0) return prevTasks;

            return prevTasks.slice(1);
        })
};

return {
    tasks,
    currentTask,
    addTask,
    completeCurrentTask,
};
}