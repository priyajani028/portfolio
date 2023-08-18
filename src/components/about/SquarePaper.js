import { useMemo } from "react";

const SquarePaper = ({
  tape,
  tape1,
  squarePaperPosition,
  squarePaperTop,
  squarePaperLeft,
}) => {
  const squarePaperStyle = useMemo(() => {
    return {
      position: squarePaperPosition,
      top: squarePaperTop,
      left: squarePaperLeft,
    };
  }, [squarePaperPosition, squarePaperTop, squarePaperLeft]);

  return (
    <div
      className="relative w-[143.77px] h-[165px] text-center text-[10.62px] text-black font-montserrat"
      style={squarePaperStyle}
    >
      <div className="absolute h-[87.13%] w-full top-[6.57%] right-[0%] bottom-[6.3%] left-[0%] bg-white shadow-[-5.750669956207275px_0px_4.87px_-2.88px_rgba(0,_0,_0,_0.25)]" />
      <div className="absolute w-[81.54%] top-[53.33%] left-[9.74%] inline-block">{`Favorite Phrase: Muje kya me toh batak hoon `}</div>
      <div className="absolute w-[81.54%] top-[36.97%] left-[9.23%] text-[17.69px] font-semibold inline-block">
        PIKA CHAN
      </div>
      <div className="absolute w-[81.54%] top-[24.69%] left-[9.23%] text-[14.16px] font-medium inline-block">
        You can call me
      </div>
      <img
        className="absolute h-[12.53%] w-[62.85%] top-[87.47%] right-[19.31%] bottom-[0%] left-[17.85%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={tape}
      />
      <img
        className="absolute h-[10.66%] w-[63.15%] top-[0%] right-[18%] bottom-[89.34%] left-[18.85%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={tape1}
      />
    </div>
  );
};

export default SquarePaper;
