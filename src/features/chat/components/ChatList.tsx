import type { Chat } from '@/features/shared/types/dto';
import ChatMessage from './ChatMessage';

type Props = {
  chats: Chat[];
};

export default function ChatList({ chats }: Props) {
  return (
    <div className="flex-1">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chats.map((chat) => (
          <ChatMessage key={chat.chatId} chat={chat} isUser={chat.role === 'USER'} />
        ))}
      </div>
    </div>
  );
}
