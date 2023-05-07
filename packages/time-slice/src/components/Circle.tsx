/* Circle 组件 */
export function Circle() {
  const color = getColor();
  const [left, top] = getPostion(600, 400);
  return (
    <div
      border="rounded-full"
      absolute="~"
      w="5"
      h="5"
      style={{ background: color, left, top }}
    ></div>
  );
}

/* 获取随机颜色 */
function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",0.8)";
}

/* 获取画布大小生成随机位置 */
function getPostion(width: number, height: number) {
  return [
    Math.ceil(Math.random() * width) + "px",
    Math.ceil(Math.random() * height) + "px",
  ];
}
