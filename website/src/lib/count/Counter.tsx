import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

export default function Counter(props: Props) {
  const [count, setCount] = useState(props.init ?? 0);
  return (
    <Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </Fragment>
  );
}

type Props = {
  init?: number;
};
