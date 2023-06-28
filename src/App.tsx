import { useState, useRef } from "react";

import ButtonContainer from "./layout/ButtonContainer";

import formatTime from "./util/formatTime";
import LapList from "./layout/LapList";

export default function App() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLap] = useState<{ timeStamp: number }[]>([]);

    const intervalRef = useRef<number>();

    function timeAction(action: "Start" | "Stop" | "Reset" | "Lap") {
        let startTime: number, elapsedTime: number;
        switch (action) {
            case "Start":
                setRunning(true);
                startTime = Date.now() - time;
                intervalRef.current = setInterval(() => {
                    elapsedTime = Date.now() - startTime;
                    setTime(elapsedTime);
                }, 10);
                break;

            case "Stop":
                setRunning(false);
                clearInterval(intervalRef.current);
                break;

            case "Reset":
                setRunning(false);
                clearInterval(intervalRef.current);
                setTime(0);
                setLap([]);
                break;

            case "Lap":
                setLap(value => [...value, { timeStamp: time }])
                break;
        }
    }

    function deleteLapTime(sno: number) {
        setLap(value => value.filter(ele => laps.indexOf(ele) !== sno - 1));
    }

    return (
        <>
            <div className="w-full px-24 pt-5 text-center">
                <span className="text-[6rem]">{formatTime(time)}</span>
            </div>

            <ButtonContainer allZero={time === 0} running={running} timeAction={timeAction} />

            <LapList laps={laps} deleteLapTime={deleteLapTime} />
        </>
    )
}