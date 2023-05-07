import { useEffect, useRef, useState } from "react";
import { Circle } from "./Circle";

export const AfterRender = (props: {
  circleNum?: number;
  eachRenderNum?: number;
}) => {
  const { circleNum = 500, eachRenderNum = 500 } = props;

  /* 数据源 */
  const dataSource = useRef<any[]>(new Array(circleNum).fill(null));

  const times = Math.ceil(dataSource.current.length / eachRenderNum);

  /* 当前轮数 */
  const curIndex = useRef(0);

  /* domList */
  const [domList, setDomList] = useState<any[]>([]);

  const increaseRender = () => {
    if (curIndex.current > times - 1) {
      return;
    }
    const newList = dataSource.current.slice(
      curIndex.current * eachRenderNum,
      (curIndex.current + 1) * eachRenderNum,
    );

    const newDom = newList.map((v, i) => {
      return <Circle key={i + curIndex.current * eachRenderNum} />;
    });

    setDomList((oldDom) => {
      return [...oldDom, ...newDom];
    });

    curIndex.current = curIndex.current + 1;
    requestIdleCallback(() => {
      increaseRender();
    });
  };

  useEffect(() => {
    const dom = dataSource.current.slice(0, eachRenderNum).map((v, i) => {
      return <Circle key={i} />;
    });

    curIndex.current = curIndex.current + 1;
    setDomList(dom);
    increaseRender();
  }, []);

  return (
    <div relative="~" overflow="hidden" className="w-full h-full">
      {domList}
    </div>
  );
};
