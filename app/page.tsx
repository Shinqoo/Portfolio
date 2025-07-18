import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Stack from "./components/StackSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <Experience/>
        <Stack/>
      </div>
      <Footer/>
    </main>
  );
}
 