import './globals.css';

import type { Metadata } from 'next';

import AuthProvider from '@/components/authProvider';
import { ThemeProvider } from '@/components/themeProvider';
import { Toaster } from '@/components/ui/sonner';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'LinkLoom',
  description:
    'Streamline your online presence with a single, customizable link. Share all your social media, websites, and content in one place. Amplify your personal or business brand effortlessly. Start optimizing your digital footprint with LinkLoom today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
