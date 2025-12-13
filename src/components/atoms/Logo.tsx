import Image from 'next/image';
import logoImg from '~/assets/images/logo.png';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap">
    <Image
      src={logoImg}
      alt="Island Spray Professionals Logo"
      height={120}
      style={{ maxWidth: '900px', width: '100%', height: 'auto' }}
      priority
    />
  </span>
);

export default Logo;
