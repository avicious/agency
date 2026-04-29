import assets from "../assets/assets";
import Title from "./Title";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex-wrapper pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        content="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        <div className="">
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="">
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email icon" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
