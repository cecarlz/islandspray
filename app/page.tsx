import Hero from '../src/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '../src/components/widgets/Features';
import Content from '../src/components/widgets/Content';
import Steps from '../src/components/widgets/Steps';
import FAQs2 from '../src/components/widgets/FAQs2';
// import Pricing from '../src/components/widgets/Pricing';
import Team from '../src/components/widgets/Team';
// import CallToAction2 from '../src/components/widgets/CallToAction2';
import Contact from '../src/components/widgets/Contact';

import { SITE } from '~/config.js';

import {
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  contentHomeFour,
  contentHomeFive,
  contentHomeSix,
  contentHomeSeven,
  faqs2Home,
  featuresHome,
  heroHome,
  // pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Content {...contentHomeThree} />
      <Content {...contentHomeFour} />
      <Content {...contentHomeFive} />
      <Content {...contentHomeSix} />
      <Content {...contentHomeSeven} />
      {/* <Steps {...stepsHome} /> */}
      <FAQs2 {...faqs2Home} />
      {/* <Pricing {...pricingHome} /> */}
      {/* <Team {...teamHome} /> */}
      <Contact {...contactHome} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
