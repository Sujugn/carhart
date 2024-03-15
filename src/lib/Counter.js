import React from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

import { increment, decrement, incrementByAmount } from '../store/counter';

function Counter() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        dispatch(increment);
                    }}
                >
                    더하기
                </button>
                <button onClick={() => dispatch(decrement)}>빼기</button>
            </div>

            <p>{state.counter.value}</p>
        </div>
    );
}

export default Counter;
