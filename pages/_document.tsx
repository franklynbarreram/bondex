import { Navbar, Footer } from "@/components/common/layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
       
        <div className="container-pages max-w-[1440px] mx-auto">
          <Main />
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
