import { useMemo } from "react";

const LandscapePhotoSmall = ({
  landscapePhotoSmallLandsc,
  landscapePhotoSmallPosition,
  landscapePhotoSmallTop,
  landscapePhotoSmallLeft,
}) => {
  const landscapePhotoSmallStyle = useMemo(() => {
    return {
      position: landscapePhotoSmallPosition,
      top: landscapePhotoSmallTop,
      left: landscapePhotoSmallLeft,
    };
  }, [
    landscapePhotoSmallPosition,
    landscapePhotoSmallTop,
    landscapePhotoSmallLeft,
  ]);

  return (
    <img
      className="relative w-[231.25px] h-[204.67px]"
      alt=""
      src={landscapePhotoSmallLandsc}
      style={landscapePhotoSmallStyle}
    />
  );
};

export default LandscapePhotoSmall;
