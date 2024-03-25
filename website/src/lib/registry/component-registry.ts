import { lazy, ReactNode } from "react";

const MANIFEST: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.LazyExoticComponent<(props: any) => ReactNode>
> = {
  "Counter": lazy(() => import(`../count/Counter`)),
};

class Registry {
  get(name: string) {
    return MANIFEST[name];
  }
  // set
}

export const componentRegistry = new Registry();
