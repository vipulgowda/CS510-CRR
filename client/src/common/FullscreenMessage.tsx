import React from 'react';
import './FullscreenMessage.module.css';

export default function FullscreenMessage({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return <div className="container">{children}</div>;
}
