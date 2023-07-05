
import { Navbar, Footer } from "@/components/common/layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
				<Footer></Footer>
        <NextScript />
				
      </body>
    </Html>
  );
}
