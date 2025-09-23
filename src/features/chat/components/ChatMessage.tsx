import type { Chat } from '@/features/shared/types/dto';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  chat: Chat;
  isUser: boolean;
};

export default function ChatMessage({ chat, isUser }: Props) {
  const chatBoxStyle = isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900';

  return (
    <div className={cn('flex gap-3 mb-4', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <div className="flex-shrink-0">
          <Image src={chat.aiProfileImageS3} alt={chat.aiProfileName} width={40} height={40} className="rounded-full" />
        </div>
      )}
      <div className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}>
        {!isUser && <p className="text-sm text-gray-600 mb-1">{chat.aiProfileName}</p>}
        <div className={cn('max-w-xs lg:max-w-md px-4 py-2 rounded-2xl break-words shadow-sm', chatBoxStyle)}>
          {chat.content}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {new Date(chat.createAt).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}
