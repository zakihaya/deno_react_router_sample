import React, { useState } from "react";

// React.memoを使うサンプル
const Display = ({ text }: { text: string }) => {
  console.log("render Display");

  return (
    <div>
      <p>text: {text}</p>
    </div>
  );
};

const MemoizedDisplay = React.memo(Display);

export const ReactMemoSample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("render ReactMemoSample");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MemoizedDisplay text={text} />
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
