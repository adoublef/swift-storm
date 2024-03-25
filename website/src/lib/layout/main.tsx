import { PropsWithChildren } from "react";

export default function Main(props: MainProps) {
  return (
    <main>
      <h2>main block</h2>
      {props.children}
    </main>
  );
}

type MainProps = PropsWithChildren;
