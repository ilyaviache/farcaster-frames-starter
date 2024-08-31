import { fetchMetadata } from 'frames.js/next';
import type { Metadata } from 'next';

import HomePage from '@/modules/Home/Home.page';
import { withMainLayoutPage } from '@/packages/components/layouts/Pages/Main';

import { vercelURL } from './utils';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New api example',
    description: 'This is a new api example',
    other: {
      ...(await fetchMetadata(
        new URL(
          '/frames',
          vercelURL() || 'http://localhost:3000'
        )
      ))
    }
  };
}

// const Home = async() => {
//   return <HomePage />;
// };

export default withMainLayoutPage(HomePage);
