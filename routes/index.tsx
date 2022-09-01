/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <html class={tw`md:text-xl font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Hasan Atak's Homepage</title>
      </Head>
      <body>
        <div
          class={tw`max-w-xl min-h-screen mx-auto bg-white md:border-x-sm border-black`}
        >
          <Header />
          <main class={tw`px-4`}>
            {/* about me */}
            <Section>
              <div class={tw`h-[40vh]`}></div>
            </Section>
            {/* projects */}
            <Section heading="Projects"></Section>
          </main>
        </div>
      </body>
    </html>
  );
}
