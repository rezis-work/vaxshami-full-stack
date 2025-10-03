import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex items-center flex-1">
      <div className="text-white h-max ">
        <span className="inline-block bg-[#FFE1DF] text-orange-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
          BUSINESS
        </span>

        <span className="text-sm mb-4 ml-4">August 05, 2024</span>

        <h2 className="max-w-[600px] text-xl sm:text-4xl font-semibold mb-6 leading-tight tracking-tighter">
          <Link href="/heroPage" className="underlineHover">
            New Study Reveals Surprising Benefits of Meditation on Brain Health
          </Link>
        </h2>

        <p className="text-xl leading-relaxed max-w-2xl hidden sm:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis leo et bibendum pretium. Suspendisse ligula neque, ultri...
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
