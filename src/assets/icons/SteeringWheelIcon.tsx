import { FC } from "react";

interface SteeringWheelIconProps {
  fill?: string;
}

export const SteeringWheelIcon: FC<SteeringWheelIconProps> = ({ fill }) => {
  return (
    <svg
      id="car-steering-wheel"
      xmlns="http://www.w3.org/2000/svg"
      width="60.5"
      height="60.5"
      viewBox="0 0 60.5 60.5"
      fill={fill}
    >
      <g id="steering_x5F_wheel">
        <path
          id="contur_607"
          data-name="Contur 607"
          d="M30.25,0A30.25,30.25,0,1,0,60.5,30.25,30.251,30.251,0,0,0,30.25,0Zm0,7.563a22.668,22.668,0,0,1,21.3,15.125H8.95A22.668,22.668,0,0,1,30.25,7.563Zm0,26.469a3.781,3.781,0,1,1,3.781-3.781A3.78,3.78,0,0,1,30.25,34.031ZM7.563,30.25c10.332,0,18.7,9.956,18.876,22.3A22.683,22.683,0,0,1,7.563,30.25Zm26.5,22.3c.176-12.348,8.544-22.3,18.876-22.3A22.683,22.683,0,0,1,34.062,52.554Z"
        />
      </g>
    </svg>
  );
};

SteeringWheelIcon.defaultProps = {
  fill: "#000",
};
