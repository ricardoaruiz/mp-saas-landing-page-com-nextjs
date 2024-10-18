import { Footer, Header, Sections } from '@/components';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Sections.SimplifyYourStudies id="section1" />
        <Sections.HowDoesItWork id="section2" />
        <Sections.Price id="section3" />
        <Sections.ReadyToChangeYourLive />
      </main>

      <Footer />
    </>
  );
}
