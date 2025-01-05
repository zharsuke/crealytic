import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rokkitt } from "next/font/google";

const font = Rokkitt({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
