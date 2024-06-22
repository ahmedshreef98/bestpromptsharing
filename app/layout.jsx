import '@styles/globals.css'

const metadata = {
    title: "BestPromptSharing",
    description :"Discover & Sahre Best Prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                  {children}
                 </main>
            </body>
      </html>
  )
}

export default RootLayout
