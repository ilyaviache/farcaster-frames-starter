import { type NextPageProps } from '@/@types/global';
import Footer from '@/modules/Home/components/Footer';
import Image from '@/packages/components/base/Images/Image';

import styles from './Home.page.module.css';

const HomePage: React.FC<NextPageProps> = (props) => {
  console.log('props', props); // eslint-disable-line
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js Frames Starter
        </h1>

        <Image
          effect="blur"
          src="https://gading.dev/media/banners/1.jpg"
          width={500}
          alt="Vercel Logo"
          className="flex justify-center items-center min-h-[150px] sm:min-h-[300px] rounded h-full object-fit"
          wrapperClassName="mt-10 max-w-full mb-10 rounded"
        />

        <hr className="w-full max-w-lg my-8" />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
