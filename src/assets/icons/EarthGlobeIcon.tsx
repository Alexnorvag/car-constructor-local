import { FC } from "react";

interface EarthGlobeIconProps {
  fill?: string;
}

export const EarthGlobeIcon: FC<EarthGlobeIconProps> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62.513"
      height="62.5"
      viewBox="0 0 62.513 62.5"
    >
      <path
        id="Контур_611"
        data-name="Контур 611"
        d="M58.918,16.748c-.486-.905-1.013-1.8-1.582-2.649a31.237,31.237,0,0,0-52.16,0c-.568.851-1.1,1.744-1.582,2.649A31.256,31.256,0,1,0,62.513,31.305,31.067,31.067,0,0,0,58.918,16.748ZM44.866,51.664a24.082,24.082,0,0,1-4.717,2.442,28.3,28.3,0,0,0,5.478-11.4c.084-.317.156-.644.232-.969A31.139,31.139,0,0,0,54.9,37.7,24.435,24.435,0,0,1,44.866,51.664ZM43.242,22.491c-.258.06-.512.124-.774.178a51.081,51.081,0,0,1-9.66,1.153c-.065,0-.129.007-.2.008V6.872c.029.007.058.009.086.016,4.683,1.034,8.7,7.124,10.471,15.239C43.2,22.247,43.217,22.37,43.242,22.491ZM32.615,26.534a54.563,54.563,0,0,0,10.327-1.176c.258-.053.506-.114.758-.171.05.349.091.7.133,1.058q.052.445.1.892.1,1.076.155,2.177.02.436.031.872c.01.372.02.744.02,1.119a43.019,43.019,0,0,1-.8,8.272,51.844,51.844,0,0,1-10.522,1.345c-.067,0-.131.007-.2.009v-14.4h0Zm0,17.1a55.585,55.585,0,0,0,10.039-1.105c-.085.3-.165.605-.257.9-2.011,6.621-5.587,11.39-9.7,12.309-.029.006-.058.008-.086.014Zm19.8-24.655A28.9,28.9,0,0,1,46.4,21.6c-.116.036-.222.077-.34.113-.02-.1-.036-.195-.057-.29A29.643,29.643,0,0,0,40.114,8.472,24.391,24.391,0,0,1,52.353,18.879C52.373,18.913,52.4,18.944,52.416,18.979ZM46.446,38.7a49.8,49.8,0,0,0,.559-7.392,47.908,47.908,0,0,0-.486-6.877A32.146,32.146,0,0,0,53.66,21.4a24.237,24.237,0,0,1,2.1,9.908c0,.768-.041,1.535-.108,2.289a21.1,21.1,0,0,1-7.773,4.618Q47.18,38.465,46.446,38.7ZM23.517,11.821c.091-.134.187-.257.28-.386.147-.2.292-.409.443-.6.032-.041.066-.078.1-.119a14.711,14.711,0,0,1,1.4-1.526l.049-.042c.237-.22.477-.427.721-.619.126-.1.255-.184.383-.275s.263-.2.4-.281a7.834,7.834,0,0,1,2.539-1.084c.028-.007.055-.009.083-.015V23.83a51.1,51.1,0,0,1-9.852-1.162c-.264-.054-.519-.117-.777-.176.026-.122.047-.245.075-.366a30.124,30.124,0,0,1,3.968-10.01C23.389,12.019,23.451,11.916,23.517,11.821ZM7.61,37.7v0a31.135,31.135,0,0,0,9.045,4.044c.076.325.148.653.232.971a30.49,30.49,0,0,0,4.227,9.734,20.88,20.88,0,0,0,1.247,1.675A24.5,24.5,0,0,1,7.61,37.7ZM8.853,21.4a32.146,32.146,0,0,0,7.14,3.031,48.137,48.137,0,0,0-.031,13.422c.036.285.067.571.108.856a22.66,22.66,0,0,1-9.2-5.118c-.067-.743-.108-1.513-.108-2.284A24.236,24.236,0,0,1,8.853,21.4Zm1.244-2.42A24.413,24.413,0,0,1,22.4,8.475a29.449,29.449,0,0,0-5.875,12.948c-.021.1-.033.2-.053.294A29.79,29.79,0,0,1,10.14,19Zm9.769,23.55A55.637,55.637,0,0,0,29.91,43.634V55.75c-.028-.005-.055-.008-.083-.013-4.108-.919-7.7-5.7-9.709-12.324C20.026,43.126,19.949,42.825,19.866,42.528Zm10.044-1.6a51.827,51.827,0,0,1-10.731-1.356,43.031,43.031,0,0,1-.8-8.271c0-.377.011-.751.02-1.124q.011-.431.031-.861.05-1.1.155-2.183.044-.449.1-.894c.042-.353.083-.707.132-1.055.252.058.5.118.758.171a54.692,54.692,0,0,0,10.339,1.176v14.4Z"
        transform="translate(0 -0.055)"
      />
    </svg>
  );
};

EarthGlobeIcon.defaultProps = {
  fill: "#000",
};
