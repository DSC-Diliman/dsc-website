import { IoClose } from "react-icons/io5"

export default function ButtonClose({ onClick }) {
  return <button
    className="fixed right-4 top-4 rounded-full bg-gray-300 w-14 h-14"
    onClick={onClick}
  >
    <IoClose className="h-8 w-8" />
  </button>
}
