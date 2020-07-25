import React from "react";

const MyPageIcon: React.FC = () => {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="17" height="15" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.0117647 0.0133333)" />
        </pattern>
        <image
          id="image0"
          width="85"
          height="75"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MyPageIcon;
