import Navbar from "@components/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Ageless Techies",
  description: "A Tech Community for any age group",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>
        <Navbar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;