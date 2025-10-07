import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          card: 'glass-card glow-border',
          formFieldInput: 'themed-input',
          formButtonPrimary: 'primary-btn',
        },
        variables: {
          colorPrimary: '#10b981', // Emerald Green (royal style)
          colorBackground: '#0a0a0a',
          colorText: '#ffffff',
          borderRadius: '1rem',
          fontFamily: 'Poppins, sans-serif',
        },
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased" suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
