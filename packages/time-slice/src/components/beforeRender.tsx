import { Circle } from "./Circle";

export const BeforeRender = (props: { circleNum?: number }) => {
  const { circleNum = 500 } = props;
  const arr = new Array(circleNum).fill(null);
  return (
    <div relative="~" overflow="hidden" className="w-full h-full">
      {arr.map((v, i) => {
        return <Circle key={i} />;
      })}
    </div>
  );
};
