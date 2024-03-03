import GoogleIcon from "../icons/GoogleIcon";

export default async function FormLogin() {
  return (
    <form className="max-w-sm mx-auto mt-20">
      <div className="mb-5">
        <label className=" block mb-2 text-sm font-medium text-black ">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-green text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-black ">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-green text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5 justify-between w-full">
          <div className="flex align-baseline items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="text-white w-[90%] bg-gradient-to-tr from-purple to-blue hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LOGIN
        </button>
      </div>
      <div className="flex-col w-full mt-10 font-light flex justify-center gap-3">
        <span>or Sign Up Using</span>
        <div className="flex self-center">
          <GoogleIcon w="30px" h="30px" href="#" />
        </div>
      </div>
      <div className="flex-col w-full mt-10 font-light flex justify-center gap-3">
        <span>or</span>
        <div className="flex self-center">
          <a href="#">Sign in</a>
        </div>
      </div>
    </form>
  );
}
