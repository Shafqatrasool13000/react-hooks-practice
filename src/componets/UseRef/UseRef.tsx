import { useRef } from "react";

function UseRefHook() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current!.focus();
        console.log(inputEl.current?.value)
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default UseRefHook;