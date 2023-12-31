import { FCL } from "shared/types";

export const SvgClose: FCL = ({ className }) => {
  return (
    <svg
      className={className}
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.460205"
        y="20.5061"
        width="29"
        height="2"
        transform="rotate(-45 0.460205 20.5061)"
        fill="black"
      />
      <rect
        x="1.41431"
        y="0.0398254"
        width="29"
        height="2"
        transform="rotate(45 1.41431 0.0398254)"
        fill="black"
      />
    </svg>
  );
};

export default SvgClose;
