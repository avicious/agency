import { servicesData } from "../assets/assets";
import assets from "../assets/assets";

const Services = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        className="absolute -top-110 -left-70 -z-1 dark:hidden select-none pointer-events-none"
        src={assets.bgImage2}
        alt="gradient"
      />
    </div>
  );
};

export default Services;
