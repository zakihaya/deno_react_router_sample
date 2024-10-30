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
      // アクセサプロパティの定義にはget/setを使用できる
      get value() {
        return inputRef.current?.value || "";
      },
      set value(val: string) {
        if (inputRef.current) {
          inputRef.current.value = val;
        }
      },
    }));

    return <input ref={inputRef} {...props} />;
  }
);
