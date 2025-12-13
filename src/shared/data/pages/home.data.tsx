// Icon imports
import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCheck,
  IconClock,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
} from '@tabler/icons-react';

// Type imports
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';

// Image imports
import heroImg from '~/assets/images/hero.jpg';
import gasImg from '~/assets/images/gas.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import specializationImg from '~/assets/images/content/specialization.jpeg';
import insulationImg from '~/assets/images/content/insulation.jpeg';
import coatingImg from '~/assets/images/content/coating.jpeg';
import waterproofingImg from '~/assets/images/content/waterproofing.jpeg';
import constructionImg from '~/assets/images/content/construction.jpeg';
import fabricaImg from '~/assets/images/content/fabrica.jpeg';
import excellenceImg from '~/assets/images/content/excellence.jpeg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: <>Island Spray Professionals  Ltd</>,

  image: {
    src: heroImg,
    alt: 'Waterproofing Image',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: undefined,
  items: [
    {
      title: 'Trusted Building Partner',
      description:
        'Island Spray Professionals Ltd is recognized for quality and innovation in the construction industry.',
      icon: IconCheck,
    },
    {
      title: 'Comprehensive Services',
      description: 'We offer tailored services including energy efficiency, building protection, and new construction.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team is dedicated to delivering superior results with attention to detail and customer focus.',
      icon: IconListCheck,
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: (
      <>
        <span style={{ display: 'block', fontWeight: 'bold', fontSize: '2.5rem', lineHeight: 1.1 }}>
          OUR <span style={{ borderBottom: '4px solid #1976d2' }}>SPECIALIZATION</span>
        </span>
      </>
    ),
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'Provides advanced spray-applied insulation designed to optimize thermal resistance, reduce energy loss, and maintain interior comfort in all climate conditions.',
  items: [
    {
      title: 'Insulation Solutions',
      description: 'Our insulation services are designed for energy efficiency and improved comfort in buildings.',
    },
    {
      title: 'Protective Coatings',
      description: 'Get Everyone on the Same Page: Share easy-to-understand reports with your team.',
    },
    {
      title: 'Waterproofing Systems',
      description: 'Waterproofing systems prevent moisture intrusion to safeguard structural integrity of buildings.',
    },
    {
      title: 'Custom Metal Fabrication',
      description: 'We fabricate custom metal studs and steel framing tailored to specific architectural needs.',
    },
  ],
  image: {
    src: specializationImg,
    alt: 'Specialization',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  header: {
    title: 'INSULATION',
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'We offer a comprehensive range of insulation solutions for every need, from residential to industrial applications.',
  items: [
    {
      title: 'Spray Foam Insulation',
      description: [
        'Closed Cell Insulation',
        'Open Cell Insulation',
      ],
    },
    {
      title: 'Cellulose Insulation',
      description: '',
    },
    {
      title: 'Fiberglass Insulation',
      description: [
        'Fiberglass Batt (Batting) Insulation',
      ],
    },
    {
      title: 'Foam Board Insulation',
      description: [
        'Expanded Polystyrene (EPS)',
        'Extruded Polystyrene (XPS)',
        'Polyisocyanurate (PIR)',
      ],
    },
    {
      title: 'Speciality Insulation',
      description: [
        'Pipe Insulation',
        'Tank Insulation',
      ],
    },
  ],
  image: {
    src: insulationImg,
    alt: 'Spray Foam Insulation',
  },
  isReversed: true,
  isAfterContent: true,
};

// Content data on Home page *******************
export const contentHomeThree: ContentProps = {
  id: 'contentThree-on-home',
  hasBackground: true,
  header: {
    title: 'COATING',
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'Provides advanced spray-applied insulation designed to optimize thermal resistance, reduce energy loss, and maintain interior comfort in all climate conditions.',
  items: [
    {
      title: 'Durable Protective Solutions',
      description:
        'Our coatings are designed to resist corrosion and withstand harsh environmental conditions, enhancing durability.',
    },
    {
      title: 'Versatile Surface Coverage',
      description:
        'Coatings can be applied to metal, concrete, and other substrates to protect against wear and environmental damage.',
    },
    {
      title: 'Advanced Application Techniques',
      description:
        'Use of advanced techniques and high-quality materials ensures flawless finish and long-term performance.',
    },
    {
      title: 'New Construction and Renovation',
      description:
        'Our coating services enhance both new builds and renovation projects by adding protective and aesthetic value.',
    },
  ],
  image: {
    src: coatingImg,
    alt: 'Coating Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeFour: ContentProps = {
  id: 'contentFour-on-home',
  hasBackground: true,
  header: {
    title: 'WATERPROOFING',
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'Provides seamless spray foam insulation designed to regulate indoor temperature, reduce energy costs, and improve structural comfort.',
  items: [
    {
      title: 'Purpose of Waterproofing',
      description:
        'Waterproofing systems protect structures from moisture intrusion and prevent water damage to critical building components.',
    },
    {
      title: 'Advanced Materials and Technology',
      description:
        'Cutting-edge technologies and materials create impermeable barriers for foundations, walls, and roofs.',
    },
    {
      title: 'Customized Solutions',
      description:
        'Thorough assessments identify vulnerabilities and allow tailored waterproofing solutions for specific needs.',
    },
    {
      title: 'Ensuring Longevity and Protection',
      description:
        'Precise waterproofing ensures long-lasting protection, maintaining building integrity especially in humid or rainy regions.',
    },
  ],
  image: {
    src: waterproofingImg,
    alt: 'Waterproofing Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Home page *******************

// Content data on Home page *******************
export const contentHomeSix: ContentProps = {
  id: 'contentSix-on-home',
  hasBackground: true,
  header: {
    title: 'CUSTOM FABRICA',
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'Provides seamless spray foam insulation designed to regulate indoor temperature, reduce energy costs, and improve structural comfort.',
  items: [
    {
      title: 'Specialized Metal Fabrication',
      description:
        'Waterproofing systems protect structures from moisture intrusion and prevent water damage to critical building components.',
    },
    {
      title: 'Precision and Durability',
      description:
        'Using advanced equipment and skilled craftsmanship, we create precise and durable components meeting industry standards.',
    },
    {
      title: 'Collaborative Project Integration',
      description:
        'We collaborate with architects, engineers, and contractors to ensure seamless integration of fabricated elements into projects.',
    },
    {
      title: 'Design Flexibility',
      description: 'Custom fabrication enables flexible design and supports complex, innovative building solutions.',
    },
  ],
  image: {
    src: fabricaImg,
    alt: 'Custom Fabrication Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeSeven: ContentProps = {
  id: 'contentSeven-on-home',
  hasBackground: true,
  header: {
    title: (
      <>
        <span style={{ display: 'block', fontWeight: 'bold', fontSize: '2.5rem', lineHeight: 1.1 }}>
          Our Commitment to <span style={{ borderBottom: '4px solid #1976d2' }}>Excellence</span>
        </span>
      </>
    ),
    subtitle: undefined,
    tagline: undefined,
  },
  content:
    'Provides advanced spray-applied insulation designed to optimize thermal resistance, reduce energy loss, and maintain interior comfort in all climate conditions.',
  items: [
    {
      title: 'Expertise and Experience',
      description:
        'Island Spray Professionals Ltd provides end-to-end construction services from planning to project completion.',
    },
    {
      title: 'High Quality Materials',
      description: 'Close collaboration with clients ensures projects meet vision, budget, and timeline requirements.',
    },
    {
      title: 'Customized Solutions',
      description:
        'Commitment to superior craftsmanship and attention to detail distinguishes the company in the industry.',
    },
    {
      title: 'Open Communication',
      description: 'Maintaining transparent and ongoing communication throughout the project lifecycle is a priority.',
    },
  ],
  image: {
    src: excellenceImg,
    alt: 'Commitment to Excellence Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Steps data on Home page *******************

// Testimonials data on Home page *******************
// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: '',
    subtitle: undefined,
    tagline: '',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Pricing data on Home page removed
export const teamHome = {
  hasBackground: true,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: undefined,
    tagline: 'Contact',
  },
  content: '',
  items: [
    {
      title: 'Physical Address',
      description: ['6c Bellevue Lane; Freeport, Grand Bahama, Bahamas'],
      icon: IconMapPin,
    },
    {
      title: 'Mailing Address',
      description: ['PO BOX F-40091, Freeport, Grand Bahama, Bahamas'],
      icon: IconMapPin,
    },
    {
      title: 'Company Email Address',
      description: ['info@islandspray.com'],
      icon: IconMail,
    },
    {
      title: 'Office Contact Number',
      description: ['+1 (242) 727-0047'],
      icon: IconPhoneCall,
    },
    {
      title: 'Customer Service Contact Number',
      description: ['+1 (242) 826-8363'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Contact Us',
    description: 'Fill out the form below and we will get back to you soon.',
    inputs: [
      { type: 'text', label: 'Name', name: 'name', placeholder: 'Your Name' },
      { type: 'email', label: 'Email', name: 'email', placeholder: 'Your Email' },
    ],
    textarea: { label: 'Message', name: 'message', placeholder: 'Your Message' },
    btn: { title: 'Send Message', type: 'submit' },
    btnPosition: 'center',
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
