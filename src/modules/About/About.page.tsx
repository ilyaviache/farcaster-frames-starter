import { Suspense } from 'react';

import { AboutPageProps } from '@/modules/About/About.types';
import AboutWrapper from '@/modules/About/components/AboutWrapper.client';

function AboutPage(props: AboutPageProps) {
  const { searchParams } = props;
  return (
    <AboutWrapper searchParams={searchParams}>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
      </Suspense>
    </AboutWrapper>
  );
}

export default AboutPage;
