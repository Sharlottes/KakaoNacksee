import type { AppProps } from 'next/app'
import Head from 'next/head';

declare global {
  interface Window {
    Kakao: any;
  }
}

require('dotenv').config();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>카카오톡 낚시하기</title>
      <meta name="description" content="뿌링클 선착순에 실패하고 분노하며 개발한 웹사이트" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
