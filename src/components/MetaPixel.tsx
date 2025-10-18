"use client";

import { useEffect } from 'react';

interface MetaPixelProps {
  pixelId: string;
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    // Meta Pixel Code
    const script = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;

    // Create and append script
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = script;
    document.head.appendChild(scriptElement);

    // Create noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    // Cleanup
    return () => {
      document.head.removeChild(scriptElement);
      document.head.removeChild(noscript);
    };
  }, [pixelId]);

  return null;
}

// Hook for tracking events
export const useMetaPixel = (pixelId: string) => {
  const trackEvent = (eventName: string, parameters?: object) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
    }
  };

  const trackCustomEvent = (eventName: string, parameters?: object) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, parameters);
    }
  };

  return { trackEvent, trackCustomEvent };
};

// Common tracking events for Paul's Roofing
export const trackQuoteRequest = (method: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'Quote Request',
      content_category: 'Roofing Service',
      contact_method: method
    });
  }
};

export const trackPhoneCall = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact', {
      content_name: 'Phone Call',
      contact_method: 'phone'
    });
  }
};