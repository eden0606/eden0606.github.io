import { WindowsProvider } from '@/components/WindowsProvider';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'welcome',
  description: 'eden\'s personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <WindowsProvider>
        <body>{children}</body>
      </WindowsProvider>
    </html>
  );
}
