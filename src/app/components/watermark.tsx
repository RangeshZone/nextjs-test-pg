import Image from "next/image";
import Link from "next/link";
import practicallyIcon from '../../../public/practically-icon.png';

export default function Watermark() {
  return (
    <div className="text-center">
      <Link
          href="https://practically.io"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 inline-block rounded-lg hover:bg-gray-300/50 border-1 border-gray-300 group text-gray-600 dark:text-gray-400"
        >
          <div className="relative mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={25}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[10px] transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <Image
              src={practicallyIcon}
              alt="Practically.io"
              width={40}
              quality={100}
              className="mx-auto relative z-10 group-hover:-translate-x-[10px] transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] duration-300"
            />
          </div>
          <small>
            Made by Practically.io
          </small>
        </Link>
    </div>
  );
}