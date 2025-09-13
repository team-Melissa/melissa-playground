import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  aiProfileImage: string;
  aiProfileName: string;
};

export default function ChatHeader({ aiProfileImage, aiProfileName }: Props) {
  const router = useRouter();

  const goToBack = () => {
    router.back();
  };

  return (
    <div className="p-4 border-b">
      <div className="flex items-center gap-3">
        <ArrowLeft onClick={goToBack} className="cursor-pointer text-black" />
        <Image src={aiProfileImage} alt={aiProfileName} width={40} height={40} className="rounded-full" />
        <h1 className="text-lg font-semibold text-gray-900">{aiProfileName}</h1>
      </div>
    </div>
  );
}
