// src/components/common/ShareButton.jsx
import { useState } from 'react';
import { Share2 } from 'lucide-react';

export default function ShareButton({ url = window.location.href, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Gagal menyalin link:', err);
      alert('Gagal menyalin link');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className={`p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors ${className}`}
      >
        <Share2 className="w-5 h-5" />
      </button>
      {copied && <span className="text-sm text-green-600">Link disalin!</span>}
    </div>
  );
}
