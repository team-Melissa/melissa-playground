import { useGetAiProfiles } from '@/features/shared/hooks/queries/useGetAiProfiles';
import AiCard from '../components/AiCard';

export default function HomeContainer() {
  const { data: aiProfiles } = useGetAiProfiles();

  return (
    <main className="min-h-screen bg-gray-200 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 font-bold mb-2">채팅할 AI를 선택하세요</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProfiles?.result.map((aiProfile) => (
            <AiCard
              key={aiProfile.aiProfileId}
              imageUrl={aiProfile.imageUrl}
              profileName={aiProfile.profileName}
              href={`/home/chat/${aiProfile.aiProfileId}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
