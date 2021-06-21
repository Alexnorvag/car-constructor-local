import { FC } from "react";

interface HomeIconProps {
  fill?: string;
}

export const HomeIcon: FC<HomeIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65.5"
      height="65.5"
      viewBox="0 0 65.5 65.5"
      fill={fill}
    >
      <g
        id="Group_859"
        data-name="Group 859"
        transform="translate(-20 -224)"
      >
        <g
          id="Group_858"
          data-name="Group 858"
          transform="translate(0 -499)"
        >
          <path
            id="contour_615"
            data-name="contour 615"
            d="M32.75,0A32.75,32.75,0,1,0,65.5,32.75,32.75,32.75,0,0,0,32.75,0Zm0,57.313A24.563,24.563,0,1,1,57.313,32.75,24.591,24.591,0,0,1,32.75,57.313Z"
            transform="translate(20 723)"
          />
        </g>
        <path
          id="contour_636"
          data-name="contour 636"
          d="M120.982,142.83l-.018.013h0l-.018.014,1.52,2.044,1.52,2.04.6-.446.344-.24v16.283h30.44v-10.23l.013-6.058.914.678h0l.018.014,1.516-2.04,1.52-2.044-19.2-14.283Zm31.843,2.071h-2.546v12.545h-5.713V147.039H135.73v10.407h-5.709V144.9h-2.969l-.3-.017.727-.54,2.546-1.895.534-.4,9.593-7.134,9.6,7.135.534.4,2.546,1.891.421.313.3.244Z"
          transform="translate(-87.919 109.031)"
        />
      </g>
    </svg>
  );
};

HomeIcon.defaultProps = {
  fill: "#000",
};
