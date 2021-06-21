import { FC } from "react";

interface SendIconProps {
  fill?: string;
}

export const SendIcon: FC<SendIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="41"
      height="36"
      viewBox="0.443 0 40.115 36"
      fill={fill}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="36"
        viewBox="0.555 0.444 39.445 35.399"
      >
        <path
          fillRule="evenodd"
          d="M1.222 35.8l5.54-2.483 14.203-6.363 14.202-6.363 4.584-2.055c.029-.012.04-.037.064-.053a.448.448 0 00.159-.196.386.386 0 000-.286.434.434 0 00-.159-.196c-.024-.016-.035-.04-.064-.054l-4.584-2.053-14.202-6.364L6.763 2.971 1.222.49C.842.32.435.672.587 1.04l2.22 5.359 4.865 11.746-4.865 11.747-2.22 5.359c-.152.367.255.72.635.55zm10.282-7.615L5.515 30.86l5.267-12.715h23.133l-14.202 6.363-8.209 3.678z"
          paintOrder="stroke fill markers"
        ></path>
      </svg>
    </svg>
  );
};

SendIcon.defaultProps = {
  fill: "#fff",
};
