import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Import fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/epilogue/300.css";
import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/600.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/900.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
