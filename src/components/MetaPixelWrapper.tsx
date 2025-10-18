"use client";

import { MetaPixel } from './MetaPixel';

export function MetaPixelWrapper() {
  // Client-side access to environment variable
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  
  if (!pixelId) return null;
  
  return <MetaPixel pixelId={pixelId} />;
}