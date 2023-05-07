import { useState } from "react";
import { BeforeRender } from "./components/beforeRender";
import { AfterRender } from "./components/afterRender";

function App() {
  const [showCircle, setShowCircle] = useState<"before" | "after" | null>();

  const [circleNum, setCircleNum] = useState(1000);

  return (
    <div space="y-2" font="mono">
      <div space="x-2">
        <button className="btn" onClick={() => setShowCircle("before")}>
          渲染 1
        </button>
        <button className="btn" onClick={() => setShowCircle("after")}>
          渲染 2
        </button>
        <button onClick={() => setShowCircle(null)}>重置</button>
      </div>
      <div space="y-2">
        <span>渲染的 circle 个数：{circleNum}</span>
        <div space="x-2">
          <button onClick={() => setCircleNum(500)}>渲染500个</button>
          <button onClick={() => setCircleNum(1000)}>渲染1000个</button>
          <button onClick={() => setCircleNum(2000)}>渲染2000个</button>
        </div>
      </div>

      <div w="150" h="100" border="1px dashed" bg="yellow-50">
        {showCircle === "before" ? (
          <BeforeRender circleNum={circleNum} />
        ) : null}
        {showCircle === "after" ? (
          <AfterRender circleNum={circleNum} eachRenderNum={200} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
