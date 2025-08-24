import './globals.css'

export const metadata = {
  title: 'Krupa Engineering Enterprise - Industrial Equipment Manufacturer',
  description: 'Leading manufacturer of industrial equipment and custom fabrication solutions. Specializing in heat exchangers, pressure vessels, storage tanks, and more. ISO 9001:2015 certified.',
  keywords: 'industrial equipment, heat exchangers, pressure vessels, storage tanks, custom fabrication, manufacturing, oil & gas, pharmaceutical, chemical industry',
  authors: [{ name: 'Krupa Engineering Enterprise' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
