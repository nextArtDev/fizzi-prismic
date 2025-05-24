
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
      <section
        className={`min-h-screen  overflow-x-hidden  `}
      >
        {children}

      </section>
 
  )
}