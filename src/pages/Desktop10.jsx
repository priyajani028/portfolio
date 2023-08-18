import LandscapePhotoSmall from "../components/LandscapePhotoSmall";
import LandscapePhotosIcon from "../components/LandscapePhotosIcon";
import SquarePaper from "../components/SquarePaper";
import PolaroidIcon from "../components/PolaroidIcon";

const Desktop10 = () => {
  return (
    <div className="relative bg-oldlace w-full h-[1024px] overflow-hidden text-left text-[133.66px] text-darkslategray font-chelsea-market">
      <div className="absolute top-[1406px] left-[0px] bg-navajowhite w-[1440px] h-[449px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[692px] left-[1024px] w-[334.16px] h-[306.41px]"
        alt=""
        src="/group-10.svg"
      />
      <div className="absolute top-[118px] left-[538px] tracking-[0.02em] leading-[156.97px]">
        About Me
      </div>
      <div className="absolute top-[314px] left-[538px] text-[40px] tracking-[0.02em] leading-[60px] flex items-center w-[731px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <LandscapePhotoSmall
        landscapePhotoSmallLandsc="/landscape-photo-small1.svg"
        landscapePhotoSmallPosition="absolute"
        landscapePhotoSmallTop="33px"
        landscapePhotoSmallLeft="149.37px"
      />
      <LandscapePhotosIcon
        landscapePhotosIcon2Lands="/2-landscape-photos1.svg"
        landscapePhotosIconPosition="absolute"
        landscapePhotosIconTop="252px"
        landscapePhotosIconLeft="0px"
      />
      <SquarePaper
        tape="/tape2.svg"
        tape1="/tape3.svg"
        squarePaperPosition="absolute"
        squarePaperTop="812px"
        squarePaperLeft="280px"
      />
      <PolaroidIcon
        polaroidIconPolaroid="/polaroid1.svg"
        polaroidIconPosition="absolute"
        polaroidIconTop="644px"
        polaroidIconLeft="0px"
      />
      <img
        className="absolute top-[699px] left-[1273px] w-[79.54px] h-[79.38px]"
        alt=""
        src="/group-11.svg"
      />
    </div>
  );
};

export default Desktop10;
