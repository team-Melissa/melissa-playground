import { SendHorizontal } from 'lucide-react';

export default function ChatInput() {
  // Todo: 백엔드 v2 non-streaming API 나오면 연동
  return (
    <div className="border-t p-4">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <SendHorizontal className="text-black cursor-pointer" />
      </div>
    </div>
  );
}
