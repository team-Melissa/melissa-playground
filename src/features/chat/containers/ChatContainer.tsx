import ChatHeader from '@/features/chat/components/ChatHeader';
import ChatInput from '@/features/chat/components/ChatInput';
import { useAiProfileId } from '@/features/chat/hooks/useAiProfileId';
import { useGetChattingList } from '@/features/shared/hooks/queries/useGetChattingList';
import ChatList from '../components/ChatList';

export default function ChatContainer() {
  const aiProfileId = useAiProfileId();

  const { data: chattingList } = useGetChattingList(aiProfileId ?? 0);

  if (!chattingList) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <ChatHeader aiProfileImage={chattingList.aiProfileImageS3} aiProfileName={chattingList.aiProfileName} />
      <ChatList chats={chattingList.chats} />
      <ChatInput />
    </div>
  );
}
