import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { TitleBar } from '@/features/dashboard/TitleBar';

const DashboardIndexPage = () => {
  const t = useTranslations('DashboardIndex');

  const insuranceData = [
    {
      title: 'Health Insurance',
      description: 'Get coverage for your health needs.',
    },
    {
      title: 'Car Insurance',
      description: 'Insure your car against damages.',
    },
    {
      title: 'Theft Insurance',
      description: 'Get coverage in case of theft.',
    },
  ];

  return (
    <>
      <TitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {insuranceData.map((data) => {
          return (
            <div
              className="flex w-full items-center rounded-lg bg-slate-200 p-4 px-6"
              key={data.title}
            >
              <div className="grow">
                <h2 className="text-lg font-semibold">{data.title}</h2>
                {data.description}
              </div>
              <ArrowRightIcon
                color="#111111"
                className="size-8 cursor-pointer hover:opacity-60"
                fontSize={10}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashboardIndexPage;
