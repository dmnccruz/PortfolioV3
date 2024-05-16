import { LottieIcon } from "@/components/LottieIcon/LottieIcon";
import HomepageIcon from "@/assets/lottie/hompage-icon.json";

const Homepage = () => {
  return (
    <div className={"h-screen w-full flex items-center justify-center"}>
      <LottieIcon icon={HomepageIcon} height={500} />
    </div>
  );
};

export default Homepage;
