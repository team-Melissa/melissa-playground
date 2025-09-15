import ChatHeader from '@/features/chat/components/ChatHeader';
import ChatInput from '@/features/chat/components/ChatInput';
import { useAiProfileId } from '@/features/chat/hooks/useAiProfileId';
import { useChangeAiProfileMutation } from '@/features/shared/hooks/mutations/useChangeAiProfileMutation';
import { useChatroomMutation } from '@/features/shared/hooks/mutations/useChatroomMutation';
import { useGetChattingList } from '@/features/shared/hooks/queries/useGetChattingList';
import { useEffect, useRef, useState } from 'react';
import ChatList from '../components/ChatList';

export default function ChatContainer() {
  const aiProfileId = useAiProfileId();
  const [isReady, setIsReady] = useState<boolean>(false);
  const initializedRef = useRef<boolean>(false);

  const { data: chattingList } = useGetChattingList(isReady);

  const { mutateAsync: chatroomMutate } = useChatroomMutation();
  const { mutateAsync: changeAiProfileMutate } = useChangeAiProfileMutation();

  useEffect(() => {
    if (initializedRef.current) return;

    (async () => {
      if (aiProfileId) {
        initializedRef.current = true;
        await chatroomMutate(aiProfileId);
        await changeAiProfileMutate(aiProfileId);
        setIsReady(true);
      }
    })();
  }, [isReady, aiProfileId, changeAiProfileMutate, chatroomMutate]);

  if (!chattingList) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ChatHeader aiProfileImage={chattingList.aiProfileImageS3} aiProfileName={chattingList.aiProfileName} />
      <ChatList chats={chattingList.chats} />
      <ChatInput />
    </div>
  );
}
