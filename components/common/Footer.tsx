import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex py-10 justify-center items-center">
          <div className="">
            <h1 className="typo text-3xl text-white">media club</h1>
            <div className=" flex flex-wrap text-white text-sm open">
              <div className="w-1/2">
                <h1 className="py-1">Discover</h1>
                <h1 className="py-1">Events</h1>
                <h1 className="py-1">Resources</h1>
                <h1 className="py-1">Contact</h1>
              </div>
              <div className="w-1/2">
                <h1 className="py-1">Privacy Policy</h1>
                <h1 className="py-1">Terms of Use</h1>
                <h1 className="py-1">FAQ</h1>
              </div>
            </div>
            <h1 className="text-white text-[13px] open pt-5">
              Copyright ©2022 All rights reserved.
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex py-10 justify-center items-center">
          <div className="">
            <div className="text-white flex flex-col gap-3">
              <h1 className="text-2xl open font-bold pl-4">
                Join our Newsletter
              </h1>
              <h1 className="text-sm open font-light pl-4">
                We&apos;ll send you nice letters. No spam.
              </h1>
              <div className="relative">
                <input
                  style={{ outline: 0 }}
                  placeholder="Enter your email"
                  className=" bg-white/10 w-[200px] md:w-[400px] rounded-3xl h-[50px] px-5"
                />
                <button className="absolute right-0 w-[100px] h-[50px] rounded-3xl bg-red-600 geo font-semibold text-black hover:scale-110 transition-all ease-in-out duration-500">
                  Subscribe
                </button>
              </div>
              <div className="w-full flex justify-between p-3">
                <Image
                  src="/logos/facebook.svg"
                  alt="Facebook Logo"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                />
                <Image
                  src="/logos/instagram.svg"
                  alt="Instagram Logo"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                />
                <Image
                  src="/logos/twitch.svg"
                  alt="Twitch Logo"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                />
                <Image
                  src="/logos/dribble.svg"
                  alt="Dribble Logo"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                />
                <Image
                  src="/logos/spotify.svg"
                  alt="Spotify Logo"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
