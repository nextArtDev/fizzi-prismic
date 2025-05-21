 
 
import './globals.css'
 

 

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen  overflow-x-hidden antialiased`}
      >
       
        {children}
        
      </body>
    </html>
  )
}