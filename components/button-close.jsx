import { IoClose } from "react-icons/io5";

export default function ButtonClose({ onClick }) {
  return (
    <button
      className="fixed right-7 top-7 md:right-4 md:top-4 rounded-full bg-gray-300 bg-opacity-70 w-12 h-12 md:w-14 md:h-14"
      onClick={onClick}
    >
      <IoClose className="h-8 w-8 align-middle" />
    </button>
  );
}
