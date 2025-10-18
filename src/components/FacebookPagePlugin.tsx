"use client";

import { useEffect } from 'react';

interface FacebookPagePluginProps {
  pageId: string;
  width?: number;
  height?: number;
  showFacepile?: boolean;
  showPosts?: boolean;
}

export function FacebookPagePlugin({ 
  pageId = "722683144257830", 
  width = 340, 
  height = 300,
  showFacepile = true,
  showPosts = true
}: FacebookPagePluginProps) {
  useEffect(() => {
    // Load Facebook SDK
    (window as any).fbAsyncInit = function() {
      (window as any).FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };
    
    // Load SDK script
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    
    if (!document.getElementById('facebook-jssdk')) {
      document.head.appendChild(script);
    }
    
    return () => {
      // Cleanup if needed
      const existingScript = document.getElementById('facebook-jssdk');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
      <h3 className="text-zinc-200 font-semibold mb-4 text-center">Follow Us on Facebook</h3>
      <div 
        className="fb-page" 
        data-href={`https://www.facebook.com/profile.php?id=${pageId}`}
        data-tabs={showPosts ? "timeline" : ""}
        data-width={width.toString()}
        data-height={height.toString()}
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile={showFacepile.toString()}
      >
        <blockquote 
          cite={`https://www.facebook.com/profile.php?id=${pageId}`} 
          className="fb-xfbml-parse-ignore"
        >
          <a 
            href={`https://www.facebook.com/profile.php?id=${pageId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Paul&apos;s Roofing on Facebook
          </a>
        </blockquote>
      </div>
    </div>
  );
}