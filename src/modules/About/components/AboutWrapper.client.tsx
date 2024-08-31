'use client';

import { PropsWithChildren } from 'react';

import type { NextPageProps } from '@/@types/global';
import Message from '@/modules/About/components/Message';
import Link from '@/packages/components/base/Navigations/Link';

interface Props {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<Props>) {
  const { children, searchParams } = props;

  return (
    <div className="flex justify-center items-center w-full mb-10">
      <main className="mt-10">
        <div className="flex items-center justify-center my-8 flex-col">
          <p>
            Passed Query:
          </p>
          <p>
            {JSON.stringify(searchParams)}
          </p>
          <Message messages={searchParams.text?.toString()} />
          <Link href="/" className="text-fuchsia-400 text-center mt-5">
            Back to Homepage
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AboutWrapper;
