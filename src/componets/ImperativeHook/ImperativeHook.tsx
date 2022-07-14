import { forwardRef, useImperativeHandle, useRef } from "react";

function FancyInput(props:any, ref:any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const imperativeHook=useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current!.focus();
    }
  }));
  console.log(imperativeHook)
  return <input ref={inputRef} />;
}
export const ResultInput = forwardRef(FancyInput);