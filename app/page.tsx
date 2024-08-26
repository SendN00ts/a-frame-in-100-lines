import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0x7e9b0d4e50680369ADFa18C0b3b3114Dc30a152E?ref=0xD6Da6129B1EC0C3F9DBe349a4aE564C9cf35be65>',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/testmint2.jpg`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}