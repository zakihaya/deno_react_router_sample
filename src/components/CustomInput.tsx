import { forwardRef, useRef, useImperativeHandle } from "react";

// forwardRefを使用してrefを受け取る
export const CustomInput = forwardRef<Partial<HTMLInputElement> | undefined>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // useImperativeHandleを使用してrefを返す
    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    return <input ref={inputRef} {...props} />;
  }
);
