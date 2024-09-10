import { Header } from "@/components/header";
import { Artist } from "@/components/artist";
import { Container } from "@/components/container";
import { NewGallery } from "@/components/new-gallery";
import { MultipleModern } from "@/components/multiple-modern";
import { Ampart } from "@/components/ampart";
import { Footer } from "@/components/footer";

export default function Home() {
  const categories = ["Visit", "The Museum", "About", "Support", "Contact"];
  return (
    <div className="absolute w-full bg-[#E9E9DB] z-[-10]">
      <Header
        categories={categories}
        className="w-[1600px] mx-auto items-center"
      />
      <Container>
        <Artist className="" />
      </Container>
      <NewGallery />
      <MultipleModern className="" />
      <Ampart />
      <Footer />
    </div>
  );
}
