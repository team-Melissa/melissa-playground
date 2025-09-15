import { useSendChatMutation } from '@/features/shared/hooks/mutations/useSendChatMutation';
import { SendHorizontal } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useState } from 'react';

export default function ChatInput() {
  const [input, setInput] = useState<string>('');
  const { isPending, mutate: sendChatMutate } = useSendChatMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;
    sendChatMutate(input, { onSuccess: () => setInput('') });
  };

  return (
    <div className="sticky bottom-0 bg-white/80 border-t p-4">
      <form className="flex gap-2 items-center" onSubmit={handleChatSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <button type="submit">
          <SendHorizontal className="text-black cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
