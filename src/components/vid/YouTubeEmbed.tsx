// src/components/vid/YouTubeEmbed.tsx
import React from "react";

interface YouTubeEmbedProps {
  url: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  className = "",
}) => {
  // Fungsi ekstraksi videoId dari URL YouTube biasa atau short URL
  const getYouTubeId = (youtubeUrl: string): string | null => {
    try {
      const urlObj = new URL(youtubeUrl);
      // Jika domain youtube.com
      if (
        urlObj.hostname.includes("youtube.com") &&
        urlObj.searchParams.has("v")
      ) {
        return urlObj.searchParams.get("v");
      }
      // Jika short youtu.be
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      }
      // Jika embed URL
      if (
        urlObj.hostname.includes("youtube.com") &&
        urlObj.pathname.startsWith("/embed/")
      ) {
        return urlObj.pathname.split("/embed/")[1];
      }
      return null;
    } catch {
      return null;
    }
  };

  const videoId = getYouTubeId(url);
  if (!videoId) {
    return (
      <div className={`text-center text-red-500 ${className}`}>
        URL YouTube tidak valid.
      </div>
    );
  }

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div className={`${className}`}>
      <div
        className="relative w-full"
        style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
      >
        <iframe
          src={embedSrc}
          title="YouTube video"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
