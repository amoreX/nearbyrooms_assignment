import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const InstrumentSans = Instrument_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Nearby Rooms",
  description: "Assignment for Internship",
};

import Navbar from "./Routes/Navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InstrumentSans.className}  antialiased`}
      >
        
        {children}
        <Navbar />
        
      </body>
    </html>
  );
}
