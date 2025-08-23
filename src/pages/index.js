import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero, { Section } from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/ProjectSection";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer";
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Meira Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section>
          <Header/>
        </section>

        <section>
        <Hero/>
        </section>

        <section>
        <About/>
        </section>

        <section>
          <Skills/>
        </section>

        <section>
        <Projects/>
        </section>

        <section>
          <Contact/>
        </section>

        <section>
          <Footer/>
        </section>
      </main>
    </>
  );
}
