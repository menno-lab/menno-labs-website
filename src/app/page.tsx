import { CallToAction } from "@/components/call-to-action";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <CallToAction />
    </Container>
  );
}
