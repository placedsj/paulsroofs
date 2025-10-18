"use client";

interface FacebookShareButtonProps {
  url: string;
  title?: string;
  className?: string;
}

export function FacebookShareButton({ 
  url, 
  title = "Check out Paul's Roofing!",
  className = "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
}: FacebookShareButtonProps) {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`;
    window.open(shareUrl, 'facebook-share', 'width=626,height=436');
  };
  
  return (
    <button
      onClick={handleShare}
      className={className}
      aria-label="Share on Facebook"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      Share on Facebook
    </button>
  );
}

// Alternative compact version
export function FacebookShareIcon({ url, title }: FacebookShareButtonProps) {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title || '')}`;
    window.open(shareUrl, 'facebook-share', 'width=626,height=436');
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
      aria-label="Share on Facebook"
      title="Share on Facebook"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </button>
  );
}