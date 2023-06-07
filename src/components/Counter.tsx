import { useState } from "react";
import MyButton from "./MyButton"

interface CounterProps {
    count: number,
    onIncrement:  React.MouseEventHandler<HTMLButtonElement>;
}

const Counter = ({count, onIncrement} : CounterProps) => {
    
    return (
        <div>
            <strong>{count}</strong>
            <MyButton onClick={onIncrement}>+1</MyButton>
        </div>
    )
}
export default Counter;