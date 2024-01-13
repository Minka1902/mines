import React from "react";

export default function Timer({ color = "black", isHours = true, isBr, isMinutes = true, isStart, isButtons, displaySize }) {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(isStart);
    const intervalRef = React.useRef(null);

    const turnOnTimer = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10);
    }

    const startTimer = () => {
        turnOnTimer();
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const formatTime = (time) => {
        const date = new Date(time);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        const milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
            .toString()
            .padStart(2, '0');

        if (!isMinutes) {
            return `${seconds}:${milliseconds}`;
        } else {
            if (!isHours) {
                return `${minutes}:${seconds}:${milliseconds}`;
            }
        }
        return `${hours}:${minutes}${isBr ? '\n' : ':'}${seconds}:${milliseconds}`;

    };

    React.useEffect(() => {
        if (isStart) {
            turnOnTimer();
        }
    }, [isStart])

    return (
        <div className="timer" >
            <div className="timer__display2" style={{ color: `${color}`, '--fontSize': `${displaySize}px` }}>{formatTime(time)}</div>
            {isButtons ? <div className="timer__controls">
                {isRunning ?
                    <button className="timer__button" onClick={stopTimer}>
                        Pause
                    </button>
                    :
                    <button className="timer__button" onClick={startTimer}>
                        {time === 0 ? 'Start' : 'Resume'}
                    </button>
                }
                <button className="timer__button" onClick={resetTimer}>
                    Reset
                </button>
            </div> : <></>}
        </div>
    );
};
