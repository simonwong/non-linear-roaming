"use client";

import { useEffect } from "react";

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({ slot, style, className }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={{
        display: "block",
        ...style,
      }}
      data-ad-client="ca-pub-9519296294590454"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
} 