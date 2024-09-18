import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

const Logo = () => (
  <div className="flex items-center space-x-2 text-xl font-semibold">
    <Image src="/assets/images/logo.png" alt="logo" width={32} height={32} />
    <span>{AppConfig.name}</span>
  </div>
);

export { Logo };
