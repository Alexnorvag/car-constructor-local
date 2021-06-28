import { FC } from "react";

interface UserAddIconProps {
  fill?: string;
}

export const UserAddIcon: FC<UserAddIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill={fill}
    >
      <g>
        <path d="M21,24a9,9,0,1,0-9-9A9,9,0,0,0,21,24ZM21,8a7,7,0,1,1-7,7A7,7,0,0,1,21,8Z" />
        <path d="M35,28a7,7,0,0,0-2,.29A8.9,8.9,0,0,0,27,26H15a9,9,0,0,0-9,9v6a1,1,0,0,0,1,1H35a7,7,0,0,0,0-14ZM30.11,40H8V35a7,7,0,0,1,7-7H27a7,7,0,0,1,4,1.25l-.26.21a2.65,2.65,0,0,0-.26.21c-.18.15-.35.31-.52.48s-.11.11-.17.17a7,7,0,0,0-.58.74,1,1,0,0,0-.1.17,5.89,5.89,0,0,0-.37.64c0,.1-.09.2-.13.3a4.24,4.24,0,0,0-.23.59l-.11.32c-.06.21-.1.43-.14.65l-.06.3A7.77,7.77,0,0,0,28,35a5.79,5.79,0,0,0,0,.72,1.52,1.52,0,0,0,0,.21,4.17,4.17,0,0,0,.08.49,1.83,1.83,0,0,0,.06.25c0,.14.07.29.11.42s.07.18.1.27.09.26.14.38l.13.27c0,.11.11.23.17.34a2.26,2.26,0,0,0,.16.26,3.37,3.37,0,0,0,.19.32l.19.26c.08.09.14.19.22.28s.15.17.22.25l.24.25ZM35,40a5,5,0,0,1-1.86-9.64A4.78,4.78,0,0,1,35,30a5,5,0,0,1,0,10Z" />
        <path d="M38,34H36V32a1,1,0,0,0-2,0v2H32a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V36h2a1,1,0,0,0,0-2Z" />
      </g>
    </svg>
  );
};

UserAddIcon.defaultProps = {
  fill: "#fff",
};