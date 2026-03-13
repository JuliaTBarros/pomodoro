import { useState, useEffect } from "react";
import type { PomodoroMode } from "../domain/Pomodoro";

export function usePomodoro() {
    const [mode, setMode] = useState<PomodoroMode>('focus');
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    const [cycles, setCycles] = useState(0);

    const toggleTimer = () => setIsRunning(!isRunning);

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
        setMode('focus');
        setCycles(0);
    };

    useEffect(() => {
        let intervalId: number;

        if (isRunning && timeLeft > 0) {
            intervalId = window.setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

        } else if (timeLeft === 0) {

            if (mode === 'focus') {
                const newCycles = cycles + 1;
                setCycles(newCycles);

                if (newCycles % 4 === 0) {
                    setMode('longBreak');
                    setTimeLeft(15 * 60);
                } else {
                    setMode('shortBreak');
                    setTimeLeft(5 * 60);
                }
            } else {
                setMode('focus');
                setTimeLeft(25 * 60);
            }

            setIsRunning(true);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, timeLeft, mode, cycles]);

    return { mode, timeLeft, isRunning, toggleTimer, resetTimer, cycles };
}