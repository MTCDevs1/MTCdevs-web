"use client";

import type { MouseEvent, ReactNode } from "react";

const EMAIL = "martin@mtcdevs.com";
const SUBJECT = "Project inquiry";
const BODY = "Hi Martin,\n\nI'd like to talk about a project:\n\n";

const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

// mailto: does nothing on desktops without a configured mail client (most
// Windows PCs), so on desktop we open Gmail's compose window instead.
// Mobile devices always have a mail app, so they keep the native mailto: link.
function isMobile() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export default function EmailLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isMobile()) return;
    e.preventDefault();
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={mailtoUrl} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
