import { Fragment } from "react/jsx-runtime";
import { Block } from "./block";
import { Suspense } from "react";
import { componentRegistry } from "./component-registry";

type Props = {
  blocks?: Array<Block>;
};

export default function RenderBlock(props: Props) {
  return (
    <Fragment>
      {props.blocks?.map((block) => {
        const Component = componentRegistry.get(block.component);

        return (
          <Fragment key={block.id.toString()}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component {...block.props}>
                <RenderBlock blocks={block.children} />
              </Component>
            </Suspense>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
