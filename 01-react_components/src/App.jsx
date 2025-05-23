import { useState, useEffect } from "react";

function UseWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return width;
}

function App() {
  const width = UseWindowWidth();
  return <div>Window width is {width}px</div>;
}

export { App, UseWindowWidth }