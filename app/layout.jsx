import '@styles/globals.css';

export const metadata = {
    title: "Login Project",
    description: "It's a sample for login"
}

const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;