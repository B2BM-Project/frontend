interface ClockProps {
    initialTime: number; // Initial time in seconds
}

function Clock({ initialTime }: ClockProps) {

    const hours = Math.floor(initialTime / 3600);
    const minutes = Math.floor((initialTime % 3600) / 60);
    const seconds = initialTime % 60;
    
    return (
        <>
            <div className='justify-center text-center mb-1 mt-1'>
                Remaining
            </div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": hours }as React.CSSProperties}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": minutes }as React.CSSProperties}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-base justify-center">
                        <span style={{ "--value": seconds }as React.CSSProperties}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    )
}

export default Clock
