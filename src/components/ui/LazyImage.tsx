import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export default function LazyImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
        loading={loading}
        {...props}
      />
    </div>
  );
}
