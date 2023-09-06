import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "Login Project",
    description: "It's a sample for login"
}

const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                <Provider>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;