import { FC } from "react";

interface ImageRoundedIconProps {
  fill?: string;
}

export const ImageRoundedIcon: FC<ImageRoundedIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65.5"
      height="65.5"
      viewBox="0 0 65.5 65.5"
      fill={fill}
    >
      <g
        id="Сгруппировать_857"
        data-name="Сгруппировать 857"
        transform="translate(-20 -329)"
      >
        <g id="Сгруппировать_856" data-name="Сгруппировать 856">
          <g
            id="Camera_free_icon_8"
            data-name="Camera free icon 8"
            transform="translate(20 329)"
          >
            <path
              id="Контур_612"
              data-name="Контур 612"
              d="M32.75,0A32.75,32.75,0,1,0,65.5,32.75,32.75,32.75,0,0,0,32.75,0Zm0,57.313A24.563,24.563,0,1,1,57.313,32.75,24.591,24.591,0,0,1,32.75,57.313Z"
            />
          </g>
        </g>
        <path
          id="Контур_616"
          data-name="Контур 616"
          d="M106.285,218.105a2.468,2.468,0,0,0-3.982,0l-10.95,14.113a2.478,2.478,0,0,1-4.12-.193l-4.688-7.208a2.485,2.485,0,0,0-4.257,0L71.1,235.871c-1.237,1.9,0,4.543,2.128,4.543h44.7c2.231,0,3.438-2.872,1.991-4.737Z"
          transform="translate(-43 139.3)"
        />
        <path
          id="Контур_617"
          data-name="Контур 617"
          d="M149.383,148.38a5.012,5.012,0,1,0-5.012-5.012A5.012,5.012,0,0,0,149.383,148.38Z"
          transform="translate(-106.83 207.434)"
        />
      </g>
    </svg>
  );
};

ImageRoundedIcon.defaultProps = {
  fill: "#000",
};
