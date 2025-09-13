import { useGetUserMemory } from '@/features/shared/hooks/queries/useGetUserMemory';

export default function MemoryView() {
  const { data: userMemory } = useGetUserMemory();

  if (!userMemory?.hasMemory) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">아직 메모리가 없습니다</h3>
          <p className="text-gray-600">V2 API로 대화를 진행해주세요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">메모리</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{userMemory.memoryContent}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">
          마지막 업데이트: {new Date(userMemory.lastUpdatedAt).toLocaleString('ko-KR')}
        </p>
      </div>
    </div>
  );
}
