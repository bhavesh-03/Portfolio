import { RiTwitterXFill } from "../../Assets/twitter";
import { CalendarDays, Linkedin } from "lucide-react";

export const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href="https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
      >
        <Linkedin />
        <p className="text-[12px] text-white/90 -rotate-3">
          (serious stuff 😤)
        </p>
      </a>
      <a
        href="https://twitter.com/chat_masala_25"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
      >
        <RiTwitterXFill className="text-2xl" />
        <p className="text-[12px] text-white/55 ">(mere vichaar ;)</p>
      </a>
    </div>
  );
};

export default LinksCard ;