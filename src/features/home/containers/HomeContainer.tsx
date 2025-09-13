import AiCardList from '@/features/home/components/AiCardList';

export default function HomeContainer() {
  return (
    <main className="min-h-screen bg-gray-200 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 font-bold mb-2">채팅할 AI를 선택하세요</h1>
        </div>
        <AiCardList />
      </div>
    </main>
  );
}
