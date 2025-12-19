import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
};

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>

        {/* Banner Image */}
        <div className="w-full flex justify-center mb-8">
          <Image
            src="/images/about-us/banner.jpg"
            alt="Island Spray Professionals team in front of a building project"
            width={1920}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-[550px] md:h-[900px] max-w-none border border-gray-200"
            style={{ objectPosition: 'center' }}
            priority
          />
        </div>

        {/* Banner */}
        <div className="mt-8 bg-blue-600 text-white py-6 px-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Island Spray Professionals Ltd mission is to set the standard in Spray Foam Insulation by delivering
            technically advanced, expertly installed solutions that enhance building performance and withstand the
            demands of island environments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Founded with a vision to make a difference, our company has grown from a small team of passionate
            individuals into a trusted partner for businesses and organizations worldwide. We believe in the power of
            innovation, collaboration, and dedication to excellence.
          </p>
          <p className="text-gray-700">
            Our team brings together diverse expertise and perspectives, united by a common goal: to deliver outstanding
            results that exceed expectations. We&apos;re not just about providing services—we&apos;re about creating meaningful
            partnerships that drive success.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Island Spray Professionals Ltd mission is to set the standard in Spray Foam Insulation by delivering
            technically advanced, expertly installed solutions that enhance building performance and withstand the
            demands of island environments.
          </p>
          <p className="text-gray-700">
            We&apos;re committed to maintaining the highest standards of quality, integrity, and customer satisfaction in
            everything we do.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">
                We pursue excellence in every aspect of our work, constantly pushing ourselves to improve and innovate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and respect for all stakeholders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace new ideas and technologies to stay at the forefront of our industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork and building strong relationships with our clients and partners.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-4">
            With years of experience and a proven track record of success, we&apos;ve earned the trust of clients across
            various industries. Our approach is simple: listen carefully, deliver excellence, and build relationships
            that last.
          </p>
          <p className="text-gray-700">
            When you work with us, you&apos;re not just getting a service provider—you&apos;re gaining a partner who&apos;s invested in
            your success. Let&apos;s work together to achieve your goals.
          </p>
        </section>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We&apos;d love to hear from you. Get in touch to learn more about how we can help your business thrive.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Page;
