import { FCL } from "shared/types";

export const SvgBurger: FCL = ({ className }) => {
  return (
    <svg
      className={className}
      width="29"
      height="22"
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="29" height="2" fill="black" />
      <rect y="10" width="29" height="2" fill="black" />
      <rect
        x="0.5"
        y="20.5"
        width="28"
        height="1"
        fill="black"
        stroke="black"
      />
    </svg>
  );
};

export default SvgBurger;
