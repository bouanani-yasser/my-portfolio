import { useEffect, useState } from 'react';
import { Spinner } from '../components/UI/Spinner';
import { AppWrapper } from '../context/appContext';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
   const [loading, setLoading] = useState<boolean>(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);
   return (
      <AppWrapper>
         <ThemeProvider enableSystem={true} attribute="data-theme">
            {loading ? <Spinner /> : <Component {...pageProps} />}
         </ThemeProvider>
      </AppWrapper>
   );
}

export default MyApp;
