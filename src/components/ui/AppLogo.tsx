import Image from 'next/image';
import logo from '../../../public/assets/images/app_logo.png';

export default function AppLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src={logo}
      alt="LaSmash"
      priority={priority}
      sizes="(max-width: 639px) 112px, 128px"
      className="h-auto w-28 shrink-0 sm:w-32"
    />
  );
}
