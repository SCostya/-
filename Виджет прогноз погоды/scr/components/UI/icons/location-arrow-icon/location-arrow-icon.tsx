import React from "react";

interface Props {
  deg?: number;
}

const LocationArrowIcon: React.FC<Props> = ({ deg }) => {
  return (
    <svg
      style={{ transform: `rotate(${deg}deg)` }}
      className="location-arrow-icon"
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M11.8203 1.40893C11.782 1.31647 11.7168 1.23765 11.6332 1.18266C11.5496 1.12767 11.4514 1.09903 11.3513 1.10047C11.2512 1.1019 11.1539 1.13333 11.0719 1.19069C10.9899 1.24805 10.927 1.3287 10.8913 1.42221L5.4372 15.6438C5.40087 15.7385 5.3942 15.842 5.41807 15.9405C5.44193 16.0391 5.49521 16.1281 5.57082 16.1957C5.64644 16.2632 5.74082 16.3062 5.84144 16.3189C5.94206 16.3316 6.04416 16.3134 6.13419 16.2667L11.5282 13.4726L16.9992 16.1121C17.0906 16.1565 17.1934 16.1721 17.2939 16.1566C17.3944 16.1411 17.4877 16.0954 17.5616 16.0255C17.6354 15.9556 17.6862 15.8649 17.7071 15.7654C17.728 15.666 17.7182 15.5625 17.6788 15.4687L11.8203 1.40893V1.40893Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(11.3484 0.894483) rotate(44.1809)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationArrowIcon;