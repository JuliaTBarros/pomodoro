import {useState, useEffect} from "react";
import type {PomodoroMode} from "../domain/Pomodoro.ts";
import * as timers from "node:timers";

export function usePomodoro() {
    const [mode, setMode] = useState<PomodoroMode>('focus');
    // Trabalhamos sempre em segundos para facilitar os cálculos matemáticos
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    const toggleTimer = () => setIsRunning(!isRunning);

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
        setMode('focus');
    };

    useEffect(() => {
        let intervalId: number;

        if (isRunning && timeLeft > 0) {
            intervalId = window.setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

        } else if (timeLeft === 0) {
            setIsRunning(false);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, timeLeft]);

    return {mode, timeLeft, isRunning, toggleTimer, resetTimer};
    ;
}