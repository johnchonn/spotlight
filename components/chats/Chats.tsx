import { Input } from "@/components/ui/input";

const dummyChats = [
  {
    name: "Kelly Ko",
    date: new Date(),
    previewText: "Omg I know he literally said that I but I...",
  },
  {
    name: "Joshua Moon",
    date: new Date(),
    previewText: "Omg I know he literally said that I but I...",
  },
  {
    name: "Sean Kim",
    date: new Date(),
    previewText: "Omg I know he literally said that I but I...",
  },
  {
    name: "Paul",
    date: new Date(),
    previewText: "Omg I know he literally said that I but I...",
  },
  {
    name: "John Chon",
    date: new Date(),
    previewText: "Omg I know he literally said that I but I...",
  },
];

export default function Chats() {
  return (
    // <div className="flex flex-col md:w-[350px] h-screen border-r">
    <div className="side-bar">
      <div className="input-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <Input className="search-input" placeholder="Search" />
      </div>
      {dummyChats.map((chat, _id) => (
        <div className="chat-container" key={_id}>
          <div className="flex flex-col ml-[20px]">
            <div className="flex justify-between mb-[10px]">
              <span className="font-medium text-gray-200">{chat.name}</span>
              <span className="text-[12px] text-gray-400">
                {chat.date.toDateString()}
              </span>
            </div>
            <span className="text-[13px] text-gray-400">
              {chat.previewText}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
