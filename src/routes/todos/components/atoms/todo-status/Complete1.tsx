import * as React from "react";

const TodoComplete1: React.FC<React.SVGProps<SVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || "24"}
        height={props.height || "24"}
        fill="none"
        viewBox="0 0 20 20"
    >
        <path
            fill="#75C5C1"
            d="M10 1.667c-4.592 0-8.333 3.741-8.333 8.333S5.408 18.333 10 18.333s8.333-3.741 8.333-8.333S14.592 1.667 10 1.667m3.983 6.416-4.725 4.725a.625.625 0 0 1-.883 0L6.016 10.45a.63.63 0 0 1 0-.883.63.63 0 0 1 .884 0l1.916 1.916L13.1 7.2a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883"
        ></path>
    </svg>
);

export default TodoComplete1;
