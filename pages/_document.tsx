import { Navbar, Footer } from "@/components/common/layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>
        <main className="overflow-hidden w-full relative">
          <Navbar />
          <div className="container-pages max-w-[1440px] mx-auto">
            <Main />
          </div>
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
