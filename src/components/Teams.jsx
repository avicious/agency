import Title from "./Title";
import { teamData } from "../assets/assets";

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      <Title
        title="Meet the team"
        content="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map(() => (
            <div></div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
