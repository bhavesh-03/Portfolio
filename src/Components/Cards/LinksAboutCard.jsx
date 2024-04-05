import React from "react";
import { FaSpotify, FaCamera } from "react-icons/fa";
import { CalendarDays, Linkedin } from "lucide-react";

export const LinksAboutCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href="https://open.spotify.com/user/31agrfdwyewrrv7neldckyuwd7qa?si=cz1tI7TSQDe3vPFFH4DoYw&utm_source=copy-link "
        target="_blank"
        className="hover:scale-95 h-48 duration-500 transform-gpu  flex flex-col justify-center items-center rounded-lg text-white bg-[#23AE55] w-full "
      >
        <FaSpotify className="text-3xl"/>
        <p className="text-[12px] font-bold mt-2 text-white/90 -rotate-3">
          ( music 🎶)
        </p>
      </a>
      <a
        href=""
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-48 flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
      >
        <FaCamera className="text-2xl" />
        <p className="text-base mt-3 font-bold text-white/55 ">(my clicks ;)</p>
      </a>
    </div>
  );
};

export default LinksAboutCard ;