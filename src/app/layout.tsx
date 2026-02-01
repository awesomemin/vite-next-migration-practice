import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'vite-next-migration-practice',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
