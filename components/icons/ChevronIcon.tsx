import { SVGProps } from "react";

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    {...props}
  >
    <path d="m8 10 4 4 4-4" />
  </svg>
);
