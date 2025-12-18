import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 mb-10">
          <div className="flex justify-center items-center">
            <Image
              src={require('~/assets/images/logo.png')}
              alt="Island Spray Professionals LTD logo"
              width={700}
              height={300}
              className="object-contain"
              priority
            />
          </div>

          {image && (
            <div className="relative m-auto w-full max-w-screen-2xl mt-5">
              <Image
                className="mx-auto h-full w-full object-cover rounded-2xl shadow-2xl bg-gray-400 dark:bg-slate-700"
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                sizes="100vw"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
