import { UserProfile } from '@clerk/nextjs';
import { useTranslations } from 'next-intl';

import { TitleBar } from '@/features/dashboard/TitleBar';
import { getI18nPath } from '@/utils/Helpers';

const UserProfilePage = (props: { params: { locale: string } }) => {
  const t = useTranslations('UserProfile');

  return (
    <>
      <TitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />

      <div className="flex justify-center">
        <UserProfile
          routing="path"
          path={getI18nPath('/dashboard/user-profile', props.params.locale)}
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'w-full',
            },
          }}
        />
      </div>
    </>
  );
};

export default UserProfilePage;
