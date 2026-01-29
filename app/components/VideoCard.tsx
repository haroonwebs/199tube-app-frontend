"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const VideoCard = () => {
  const navigateTo = useRouter();
  const handleClick = () => {
    navigateTo.push("/fd");
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center gap-4 w-[288px] h-63 hover:w-74.5 hover:h-65"
    >
      <div className="w-[288px] h-40.5">
        <Image
          className="rounded-t-4xl object-contain"
          src="/haroon.jpg"
          alt="Banner"
          width={288}
          height={240}
        />
      </div>
      <div className="flex items-center w-[288px] gap-3 h-22.5">
        <div>
          <Image
            className=" rounded-lg object-cover"
            src="/haroon.jpg"
            alt="Banner"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-white text-sm">
            something went wrong with this video. i am trying to fix this issuse
          </h3>
          <p className="text-gray-400 text-[8px]">channel</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
