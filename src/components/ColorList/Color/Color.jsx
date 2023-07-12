import { useEffect, useRef } from "react";
import s from "./Color.module.scss";
import cn from "classnames";

export const Color = ({ color, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color);
  }, [color]);

  return (
    <li
      className={cn(s.color, check ? s.colorCheck : "")}
      ref={colorRef}
      // style={{ "--data-color": color }}
    />
  );
};

// prettier-ignore-start
// const a = 'a'; const b = 'b';
// prettier-ignore-end
