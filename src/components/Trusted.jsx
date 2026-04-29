import { company_logos } from "../assets/assets";

const Trusted = () => {
  return (
    <div className="flex-wrapper text-gray-700 dark:text-white/80">
      <h2 className="font-semibold">Trusted by Leading Companies</h2>

      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map(({ id, logo }) => (
          <img
            key={id}
            src={logo}
            alt={logo}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;
