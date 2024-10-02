import React from 'react';

interface TextImageProps {
  text: string;
}

const TextImage: React.FC<TextImageProps> = ({ text }) => {
  return (
    <div tw="flex flex-col items-center justify-center h-full w-full bg-black bg-cover text-center">
      <div tw="text-white text-xxl font-normal tracking-tight leading-snug mt-8 px-30 whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
};

export default TextImage;
