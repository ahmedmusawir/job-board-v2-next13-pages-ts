import { Container } from "./globals";
import Hero from "./ui-ux/Hero";
import InfoBlock from "./ui-ux/InfoBlock";
import RevenueInfo from "./ui-ux/RevenueInfo";
import Testimonials from "./ui-ux/Testimonial";

const Home = () => {
  return (
    <Container FULL className="">
      <Hero />
      <RevenueInfo />
      <InfoBlock />
      <Testimonials />
    </Container>
  );
};

export default Home;
