import { useChatSummaryMutation } from '@/features/shared/hooks/mutations/useChatSummaryMutation';
import { ArrowLeft, Save } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  aiProfileImage: string;
  aiProfileName: string;
};

export default function ChatHeader({ aiProfileImage, aiProfileName }: Props) {
  const router = useRouter();
  const { isPending, mutate: chatSummaryMutate } = useChatSummaryMutation();

  const goToBack = () => {
    router.back();
  };

  const handleSummaryClick = () => {
    if (isPending) return;
    chatSummaryMutate();
  };

  return (
    <div className="sticky top-0 p-4 border-b border-gray-300 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <ArrowLeft onClick={goToBack} className="cursor-pointer text-black hover:text-gray-500" />
        <Image src={aiProfileImage} alt={aiProfileName} width={40} height={40} className="rounded-full" />
        <h1 className="text-lg font-semibold text-gray-900">{aiProfileName}</h1>
      </div>
      <div>
        <Save onClick={handleSummaryClick} className="cursor-pointer text-black hover:text-gray-500" />
      </div>
    </div>
  );
}
