import type { Metadata } from 'next';
import Hero from '../src/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '../src/components/widgets/Features';
import Content from '../src/components/widgets/Content';
import FAQs2 from '../src/components/widgets/FAQs2';
import Contact from '../src/components/widgets/Contact';

import { SITE } from '~/config.js';

import {
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  contentHomeFour,
  contentHomeSix,
  contentHomeSeven,
  faqs2Home,
  featuresHome,
  heroHome,
  socialProofHome,
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

      <Content {...contentHomeTwo} />
      <Content {...contentHomeThree} />
      <Content {...contentHomeFour} />

      <Content {...contentHomeSeven} />
      {/* <FAQs2 {...faqs2Home} /> */}
      <Contact {...contactHome} />
    </>
  );
}
