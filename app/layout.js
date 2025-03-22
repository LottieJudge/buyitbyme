// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Buy It By Me',
  description: 'Whatever you like here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
