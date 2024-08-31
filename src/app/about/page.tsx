import { cookies } from 'next/headers';

import { type NextPageProps } from '@/@types/global';
import AboutPage from '@/modules/About/About.page';
import { GithubStars, TestData } from '@/modules/About/About.types';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { createServerClient } from '@/packages/server/supabase';
import { withMetadata } from '@/packages/utils/metadata';

export const metadata = withMetadata({
  title: 'About'
});

async function getStars(): Promise<number> {
  const res = await fetch(
    'https://api.github.com/repos/ilyaviache/next-supabase-starter',
    { next: { revalidate: 60 } }
  );
  const data: GithubStars = await res.json();
  return data.stargazers_count;
}

async function getTestData(): Promise<TestData[]> {
  const cookiesStore = cookies();
  const supabase = createServerClient(cookiesStore);
  const { data, error } = await supabase.from('test_table').select('id, created_at');
  if (error) {
    //
    console.error('Error fetching data from Supabase:', error); // eslint-disable-line
    return [];
  }

  return data as TestData[];
}

const About = async(nextProps: NextPageProps) => {
  const githubStars = await getStars();
  const testData = await getTestData();

  const props = {
    ...nextProps,
    githubStars,
    testData
  };

  return <AboutPage {...props} />;
};

export default withMobileLayoutPage(About, {
  className: 'shadow-violet-500 px-3'
});
