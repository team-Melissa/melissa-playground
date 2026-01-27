import AiCard from '@/features/home/components/AiCard';
import { useChatroomMutation } from '@/features/shared/hooks/mutations/useChatroomMutation';
import { useGetAiProfiles } from '@/features/shared/hooks/queries/useGetAiProfiles';
import { useRouter } from 'next/router';

export default function AiCardList() {
  const router = useRouter();
  const { data: aiProfiles } = useGetAiProfiles();
  const chatRoomMutation = useChatroomMutation();

  const handleAiCardClick = (aiProfileId: number) => {
    if (chatRoomMutation.isPending) return;
    chatRoomMutation.mutate(aiProfileId, {
      onSuccess: () => router.push(`/home/chat/${aiProfileId}`),
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiProfiles?.map((aiProfile) => (
        <AiCard
          key={aiProfile.aiProfileId}
          aiProfile={aiProfile}
          onClick={() => handleAiCardClick(aiProfile.aiProfileId)}
        />
      ))}
    </div>
  );
}
