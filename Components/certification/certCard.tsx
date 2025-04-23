import Image from 'next/image';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface CertificateCardProps {
  title: string;
  Description: string;
  certificateLink: string;
  imageUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  Description,
  certificateLink,
  imageUrl,
}) => {
  return (
    <div className="bg-blue-950 rounded-lg shadow-lg p-4">
      <div className="h-52 w-full relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-lg"
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="text-xl font-semibold mt-4 text-yellow-100">{title}</div>
      <div className="text-white mt-2">{Description}</div>
      {certificateLink && (
        <div className="mt-4">
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 font-semibold flex gap-2 items-center"
          >
            Certificate <FaPaperPlane />
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
