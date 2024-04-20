import { Input } from "@/components/ui/input";

export default function Message() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md flex flex-col">
        <div className="h-20">
          <div className="p-5 border-b">
            <div>
              <h1 className="text-xl font-bold">Message</h1>
              <div className="flex items-center gap-2">
                {/* <div className="h-4 w-4 bg-green-400 rounded-full animate-pulse"></div> */}
                {/* <h1 className="text-sm text-gray-400">2 onlines</h1> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-5">
          <div className="flex-1"></div>
          <div>
            <div>
              <div className="h-10 w-10"></div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <Input placeholder="message" />
        </div>
      </div>
    </div>
  );
}
