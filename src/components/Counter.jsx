import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    function handleClick() {
        setCount((prevState) => prevState + 1);
    }
    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex gap-2 items-center'>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </div>
    );
}
