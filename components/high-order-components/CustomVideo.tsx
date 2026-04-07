"use client";

import { useMemo, useRef } from "react";
import { trackVideoEvent } from "@/lib/analytics";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  title?: string;
}

export const CustomVideo = ({
  src,
  poster = "",
  title,
  onPlay,
  onPause,
  onClick,
  onTimeUpdate,
  onEnded,
  ...props
}: CustomVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const finalSrc = src.startsWith("http")
    ? src
    : `${BASE_PATH}${src.startsWith("/") ? src : `/${src}`}`;

  const trackedMilestones = useRef(new Set<number>());

  const videoName = useMemo(() => {
    if (title) return title;
    const cleanSrc = src.split("/").pop() ?? src;
    return cleanSrc;
  }, [src, title]);

  const getVideoMetrics = () => {
    const video = videoRef.current;

    if (!video) {
      return {
        video_title: videoName,
        video_url: finalSrc,
      };
    }

    return {
      video_title: videoName,
      video_url: finalSrc,
      video_duration: Number.isFinite(video.duration)
        ? Math.round(video.duration)
        : undefined,
      video_current_time: Math.round(video.currentTime),
      visible: true,
    };
  };

  const handleClick: React.MouseEventHandler<HTMLVideoElement> = (event) => {
    trackVideoEvent("video_click", getVideoMetrics());
    onClick?.(event);
  };

  const handlePlay: React.ReactEventHandler<HTMLVideoElement> = (event) => {
    trackVideoEvent("video_play", getVideoMetrics());
    onPlay?.(event);
  };

  const handlePause: React.ReactEventHandler<HTMLVideoElement> = (event) => {
    const video = videoRef.current;

    if (video && !video.ended) {
      trackVideoEvent("video_pause", getVideoMetrics());
    }

    onPause?.(event);
  };

  const handleTimeUpdate: React.ReactEventHandler<HTMLVideoElement> = (
    event,
  ) => {
    const video = videoRef.current;
    if (!video || !video.duration || !Number.isFinite(video.duration)) {
      onTimeUpdate?.(event);
      return;
    }

    const percent = Math.floor((video.currentTime / video.duration) * 100);
    const milestones = [25, 50, 75];

    milestones.forEach((milestone) => {
      if (percent >= milestone && !trackedMilestones.current.has(milestone)) {
        trackedMilestones.current.add(milestone);

        trackVideoEvent("video_progress", {
          ...getVideoMetrics(),
          video_percent: milestone,
        });
      }
    });

    onTimeUpdate?.(event);
  };

  const handleEnded: React.ReactEventHandler<HTMLVideoElement> = (event) => {
    trackVideoEvent("video_complete", {
      ...getVideoMetrics(),
      video_percent: 100,
    });

    onEnded?.(event);
  };

  return (
    <video
      ref={videoRef}
      src={finalSrc}
      poster={poster}
      onClick={handleClick}
      onPlay={handlePlay}
      onPause={handlePause}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      {...props}
    />
  );
};
