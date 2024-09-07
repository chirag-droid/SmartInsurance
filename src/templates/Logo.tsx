import { AppConfig } from '@/utils/AppConfig';

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
    <svg
      className="mr-1 stroke-current stroke-2"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x="3" y="12" width="6" height="8" rx="1" />
      <rect x="9" y="8" width="6" height="12" rx="1" />
      <rect x="15" y="4" width="6" height="16" rx="1" />
      <path d="M4 20h14" />
    </svg>
    {AppConfig.name}
  </div>
);

export { Logo };
