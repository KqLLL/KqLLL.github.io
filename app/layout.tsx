import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'KqLLL Blog',
    template: '%s | KqLLL Blog',
  },
  description: '个人技术博客，分享编程、技术和思考',
  keywords: ['博客', '技术', '编程', 'Next.js', 'React'],
  authors: [{ name: 'KqLLL' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://kqlll.github.io',
    siteName: 'KqLLL Blog',
    title: 'KqLLL Blog',
    description: '个人技术博客，分享编程、技术和思考',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
