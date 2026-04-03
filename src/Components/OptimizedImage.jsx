import React, { useState } from 'react';

const getOptimizedImageUrl = (cloudinaryUrl, width, quality = 80, format = 'auto') => {
  if (!cloudinaryUrl.includes('cloudinary')) return cloudinaryUrl

  const [baseUrl, uploadPath] = cloudinaryUrl.split('/upload/')
  return `${baseUrl}/upload/w_${width},q_${quality},f_${format},c_fill/${uploadPath}`
}

const getResponsiveImageSrcSet = (cloudinaryUrl) => {
  return [
    { width: 480, descriptor: '480w' },
    { width: 768, descriptor: '768w' },
    { width: 1024, descriptor: '1024w' },
    { width: 1400, descriptor: '1400w' }
  ].map(({ width, descriptor }) =>
    `${getOptimizedImageUrl(cloudinaryUrl, width)} ${descriptor}`
  ).join(', ')
}

const OptimizedImage = React.memo(({ src, alt, className, width, height, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const srcSet = getResponsiveImageSrcSet(src)
  const defaultSrc = getOptimizedImageUrl(src, 800)

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
    />
  )
})

export default OptimizedImage