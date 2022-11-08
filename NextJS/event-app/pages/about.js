import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Go Back</Link>
    </div>
  );
}
