// O App.tsx na Clean Architecture atua apenas como um "Layout" ou "Compositor".
// Mais tarde, importaremos o Timer e a TodoList do diretório 'presentation/features'.

export default function App() {
    return (
        <div className="bg-slate-900 min-h-screen w-screen text-white flex p-8 gap-8">
            {/* Lado Esquerdo: Pomodoro Timer (Ocupará 2/3) */}
            <main className="flex-[2] bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Timer em breve...</h1>
            </main>

            {/* Lado Direito: Todo List (Ocupará 1/3) */}
            <aside className="flex-[1] bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg flex flex-col">
                <h2 className="text-xl font-bold mb-4">Fila de Tarefas</h2>
                <div className="flex-1 overflow-y-auto">
                    {/* A lista de tarefas entrará aqui */}
                    <p className="text-slate-400">Nenhuma tarefa no momento.</p>
                </div>
            </aside>
        </div>
    );
}