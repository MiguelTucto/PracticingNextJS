import '@styles/globals.css';
import Nav from "@components/Nav";

export const metadata = {
    title: "Login Project",
    description: "It's a sample for login"
}

const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;