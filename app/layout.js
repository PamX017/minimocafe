import { Inter } from 'next/font/google'
import "@/app/global.css";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Minimo Coffee & Matcha | Ceremonial Matcha & Craft Coffee in Austin, TX',
  description: 'A specialty coffee truck in downtown Austin serving high-quality ceremonial matcha and craft coffee. Located at 508 West Ave. Dog-friendly, community-focused, minimalist aesthetic.',
  keywords: 'ceremonial matcha, craft coffee, Austin coffee, matcha latte, specialty coffee, dog-friendly cafe, minimalist coffee shop, downtown Austin',
  openGraph: {
    title: 'Minimo Coffee & Matcha',
    description: 'Ceremonial Matcha & Craft Coffee in Austin, TX',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}