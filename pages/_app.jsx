import '../styles/globals.css';
import { SWRConfig } from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
