/** @jsx h */
import { h, Component, render } from "preact";
import { useContext, useReducer, useState, useCallback, useRef, useEffect, useLayoutEffect, useMemo } from "preact/hooks"
import { Router } from "preact-router";
import AsyncRoute from 'preact-async-route';
import * as timeago from 'timeago.js';

function useCounter() {
    const [value, setValue] = useState(0);
    const increment = useCallback(() => setValue(value + 1), [value]);
    return { value, increment };
}

// First counter
function CounterA() {
    const { value, increment } = useCounter();
    return (
        <div>
            <h1>Counter A: {value}</h1>
            <h2>time ago {timeago.format(1567953513078)}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

// Second counter which renders a different output.
function CounterB() {
    const { value, increment } = useCounter();
    return (
        <div>
            <h1>Counter B: {value}</h1>
            <p>I'm a nice counter</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

render(<CounterA />, document.body);