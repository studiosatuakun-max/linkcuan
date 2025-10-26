export const dynamic = 'force-dynamic';
import Hero from './(marketing)/components/Hero';
import FeaturesGrid from './(marketing)/components/FeaturesGrid';
import HowItWorks from './(marketing)/components/HowItWorks';
import Categories from './(marketing)/components/Categories';
import Segments from './(marketing)/components/Segments';
import HighlightFeatures from './(marketing)/components/HighlightFeatures';
import Testimonials from './(marketing)/components/Testimonials';
import FinalCTA from './(marketing)/components/FinalCTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Categories />
      <Segments />
      <HighlightFeatures />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
