import { CookiesProvider } from 'next-client-cookies/server';
import { ClientProviders } from '@/components/client';
import { ReactNode } from '@/types';

export const metadata = {
  title: 'Sieutoc Website',
  description: 'Generated by Sieutoc Platform',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <ClientProviders>{children}</ClientProviders>
        </CookiesProvider>
      </body>
    </html>
  );
}
