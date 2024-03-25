import "./App.css";
import { useQueryBlock } from "./lib/registry/block";
import Render from "./lib/registry/render";

export default function App() {
  const { isLoading, isError, data, error } = useQueryBlock();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1>Server Driven UI</h1>
      <Render blocks={data} />
    </>
  );
}
