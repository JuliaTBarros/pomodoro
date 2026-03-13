import { Timer } from "./presentation/features/pomodoro/Timer";
import { TaskList } from "./presentation/features/tasks/TaskList";

export default function App() {
    return (
        <div className="bg-slate-900 min-h-screen w-screen text-white flex p-8 gap-8">
            {/* Lado Esquerdo: Pomodoro Timer */}
            <main className="flex-[2] bg-slate-800 rounded-xl border border-slate-700 p-8 shadow-lg">
                <Timer />
            </main>

            {/* Lado Direito: Todo List */}
            <aside className="flex-[1] bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg flex flex-col">
                <h2 className="text-xl font-bold mb-4">Fila de Tarefas</h2>
                <TaskList />
            </aside>
        </div>
    );
}