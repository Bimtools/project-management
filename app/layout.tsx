import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/SideBar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ClientOnly from "./components/ClientOnly";

export const metadata = {
  title: "Project Management",
  description: "Generated by van-tuan.nguyen@thyssenkrupp.com",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="h-screen flex flex-row justify-between">
          <div className="flex-none">
            <Sidebar />
          </div>
          <div className="grow">
            <div className="h-screen w-full flex flex-col justify-between">
              <div className="flex-none">
                <Navbar />
              </div>
              <div className="grow h-full w-full">{children}</div>
              <div className="flex-none">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
