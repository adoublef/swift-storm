import "./App.css";
import { useQueryBlock } from "./lib/registry/block";
import RenderBlock from "./lib/registry/RenderBlock";

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
      <RenderBlock blocks={data} />
    </>
  );
}
