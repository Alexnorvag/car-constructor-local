import { FC } from "react";

interface CameraIconProps {
  fill?: string;
}

export const CameraIcon: FC<CameraIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65.5"
      height="65.5"
      viewBox="0 0 65.5 65.5"
      fill={fill}
    >
      <g
        id="Group_879"
        data-name="Group 879"
        transform="translate(-19 -642)"
      >
        <g
          id="Camera_free_icon_8"
          data-name="Camera free icon 8"
          transform="translate(19 642)"
        >
          <path
            id="contour_612"
            data-name="contour 612"
            d="M32.75,0A32.75,32.75,0,1,0,65.5,32.75,32.75,32.75,0,0,0,32.75,0Zm0,57.313A24.563,24.563,0,1,1,57.313,32.75,24.591,24.591,0,0,1,32.75,57.313Z"
          />
          <path
            id="contour_613"
            data-name="contour 613"
            d="M156.205,146.151h-5.177l-.155-1.075a4.322,4.322,0,0,0-4.255-3.685h-7.286a4.325,4.325,0,0,0-4.255,3.685l-.155,1.075h-5.177a3.352,3.352,0,0,0-3.35,3.347v15.714a3.46,3.46,0,0,0,3.456,3.456H156.1a3.458,3.458,0,0,0,3.456-3.456V149.5A3.351,3.351,0,0,0,156.205,146.151Zm-27.356,5.467V149.5a.892.892,0,0,1,.895-.892h7.305l.458-3.181a1.844,1.844,0,0,1,1.825-1.579h7.286a1.844,1.844,0,0,1,1.825,1.579l.461,3.181h7.3a.893.893,0,0,1,.9.892v2.122l-6.016-.412a10.792,10.792,0,0,0-16.217,0l-5.651.387Zm11.468-.411a7.623,7.623,0,1,1-4.966,7.143A7.575,7.575,0,0,1,140.317,151.208Z"
            transform="translate(-110.224 -123.303)"
          />
          <path
            id="contour_614"
            data-name="contour 614"
            d="M224.574,247.155a4.611,4.611,0,1,0-1.072-9.09c-.025,0-.052.007-.077.013v0l-.02,0,1.36,3.954a.527.527,0,0,1-.671.67l-3.722-1.28-.231-.081h0l-.019-.006a4.513,4.513,0,0,0-.16,1.2A4.613,4.613,0,0,0,224.574,247.155Z"
            transform="translate(-191.821 -207.495)"
          />
        </g>
      </g>
    </svg>
  );
};

CameraIcon.defaultProps = {
  fill: "#000",
};
