import { FC } from "react";

interface MenuIconProps {
  fill?: string;
}

export const MenuIcon: FC<MenuIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65.5"
      height="65.5"
      viewBox="0 0 65.5 65.5"
      fill={fill}
    >
      <g
        id="Group_855"
        data-name="Group 855"
        transform="translate(-20 -723)"
      >
        <g id="menu" transform="translate(22 725)">
          <path
            id="contur_52"
            data-name="contur 52"
            d="M179.156,154.168H151.75a2.418,2.418,0,1,1,0-4.836h27.406a2.418,2.418,0,0,1,0,4.836Zm0,0"
            transform="translate(-134.703 -131.703)"
          />
          <path
            id="contur_53"
            data-name="contur 53"
            d="M179.156,244.836H151.75a2.418,2.418,0,1,1,0-4.836h27.406a2.418,2.418,0,0,1,0,4.836Zm0,0"
            transform="translate(-134.703 -211.668)"
          />
          <path
            id="contur_54"
            data-name="contur 54"
            d="M179.156,335.5H151.75a2.418,2.418,0,1,1,0-4.836h27.406a2.418,2.418,0,0,1,0,4.836Zm0,0"
            transform="translate(-134.703 -291.633)"
          />
        </g>
        <path
          id="contur_615"
          data-name="contur 615"
          d="M32.75,0A32.75,32.75,0,1,0,65.5,32.75,32.75,32.75,0,0,0,32.75,0Zm0,57.313A24.563,24.563,0,1,1,57.313,32.75,24.591,24.591,0,0,1,32.75,57.313Z"
          transform="translate(20 723)"
        />
      </g>
    </svg>
  );
};

MenuIcon.defaultProps = {
  fill: "#000",
};
