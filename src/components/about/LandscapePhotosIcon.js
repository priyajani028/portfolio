import { useMemo } from "react";

const LandscapePhotosIcon = ({
  landscapePhotosIcon2Lands,
  landscapePhotosIconPosition,
  landscapePhotosIconTop,
  landscapePhotosIconLeft,
}) => {
  const landscapePhotosIconStyle = useMemo(() => {
    return {
      position: landscapePhotosIconPosition,
      top: landscapePhotosIconTop,
      left: landscapePhotosIconLeft,
    };
  }, [
    landscapePhotosIconPosition,
    landscapePhotosIconTop,
    landscapePhotosIconLeft,
  ]);

  return (
    <img
      className="relative w-[375.76px] h-[369.44px]"
      alt=""
      src={landscapePhotosIcon2Lands}
      style={landscapePhotosIconStyle}
    />
  );
};

export default LandscapePhotosIcon;
