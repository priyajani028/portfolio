import { useMemo } from "react";

const PolaroidIcon = ({
  polaroidIconPolaroid,
  polaroidIconPosition,
  polaroidIconTop,
  polaroidIconLeft,
}) => {
  const polaroidIconStyle = useMemo(() => {
    return {
      position: polaroidIconPosition,
      top: polaroidIconTop,
      left: polaroidIconLeft,
    };
  }, [polaroidIconPosition, polaroidIconTop, polaroidIconLeft]);

  return (
    <img
      className="relative w-[271.2px] h-[346.75px]"
      alt=""
      src={polaroidIconPolaroid}
      style={polaroidIconStyle}
    />
  );
};

export default PolaroidIcon;
