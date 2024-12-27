import { useEffect, useState } from 'react';

interface ClockProps {
    initialTime: number; // Initial time in seconds
    start: boolean; // Flag to start or stop the countdown
}

function Clock({ initialTime, start }: ClockProps) {
    const [timeLeft, setTimeLeft] = useState(initialTime * 3600); // Initial time: 2 hours in second

    useEffect(() => {
        if (!start) return; // Do nothing if start is false
    
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev < 1) {
                    console.log("time up"); // Log "time up" when countdown ends
                    alert("Time UP!!");
                    clearInterval(timer); // Stop the countdown
                    return 0;
                }
                    return prev - 1;
            });
            }, 1000);
    
            return () => clearInterval(timer); // Cleanup on component unmount or when start changes
        }, [start]); // Re-run effect when `start` changes

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    return (
        <>
            <div className='justify-center text-center mb-1 mt-1'>
                Remaining
            </div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    )
}

export default Clock
