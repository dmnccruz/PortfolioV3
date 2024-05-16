import { LottieIcon } from "@/components/LottieIcon/LottieIcon";
import HomepageIcon from "@/assets/lottie/brb-landing-animation.json";

const Homepage = () => {
  return (
    <div
      className={"h-screen w-full flex flex-col items-center justify-center"}
    >
      <div className="flex flex-col items-center col text-slate-700">
        <h1 className="font-bold text-5xl">Be right back!</h1>
        <h2 className="font-medium text-2xl">Drawing up something new.</h2>
        <h2 className="self-end text-slate-500">-dmbc</h2>
      </div>
      <LottieIcon
        icon={HomepageIcon}
        style={{ width: "100%", maxHeight: 750 }}
      />
    </div>
  );
};

export default Homepage;
