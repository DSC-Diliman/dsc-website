import { IoClose } from "react-icons/io5";

interface Props {
  onClick: () => void;
}

export default function ButtonClose({ onClick }: Props) {
  return (
    <button
      className="fixed right-7 top-7 md:right-4 md:top-4 rounded-full bg-gray-300/70 w-12 h-12 md:w-14 md:h-14"
      onClick={onClick}
    >
      <IoClose className="h-8 w-8 align-middle" />
    </button>
  );
}
