import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
    
        if (running) {
          timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
        } else {
          clearInterval(timer);
        }
    
        return () => { clearInterval(timer); };
      }, [running]);


      const startTimer = () => {
        setRunning(true);
      };
    
      const stopTimer = () => {
        setRunning(false);
      };
    
      const resetTimer = () => {
        setRunning(false);
        setCountdown(300);
      };

      const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

    return <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1>{ formatTime(countdown) }</h1>
        <div style={{display:"flex", gap:"16px"}}>
            <button onClick={() => startTimer() }>Start</button>
            <button onClick={() => stopTimer() }>Stop</button>
            <button onClick={() => resetTimer() }>Reset</button>
        </div>
    </div>

};

export default CountdownTimer;
