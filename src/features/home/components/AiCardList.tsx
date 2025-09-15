import AiCard from '@/features/home/components/AiCard';
import { useGetAiProfiles } from '@/features/shared/hooks/queries/useGetAiProfiles';

export default function AiCardList() {
  const { data: aiProfiles } = useGetAiProfiles();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiProfiles?.map((aiProfile) => (
        <AiCard
          key={aiProfile.aiProfileId}
          imageUrl={aiProfile.imageUrl}
          profileName={aiProfile.profileName}
          href={`/home/chat/${aiProfile.aiProfileId}`}
        />
      ))}
    </div>
  );
}
