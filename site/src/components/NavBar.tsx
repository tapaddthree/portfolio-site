import homeSwirl from "../media/homeSwirl.png";

export default function NavBar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.google.com" className="flex items-center">
          <img src={homeSwirl} className="h-9" alt="Home Button" />
        </a>
        <span className="font-bold border-2 border-green-500 text-green-500 p-2 rounded-full hover:bg-green-500 hover:text-white">
          Contact Me
        </span>
      </div>
    </nav>
  );
}
