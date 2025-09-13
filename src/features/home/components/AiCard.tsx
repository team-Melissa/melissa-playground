import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  imageUrl: string;
  profileName: string;
  href: string;
  className?: string;
};

export default function AiCard({ imageUrl, profileName, href, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative w-full rounded-xl border bg-white p-6 text-gray-900 shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'hover:bg-gray-50 active:scale-100',
        className
      )}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative overflow-hidden rounded-full border-2 border-gray-200 group-hover:border-blue-400 transition-colors">
          <Image
            src={imageUrl}
            alt={`${profileName} profile`}
            width={72}
            height={72}
            className="object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {profileName}
          </h3>
        </div>
      </div>
    </Link>
  );
}
