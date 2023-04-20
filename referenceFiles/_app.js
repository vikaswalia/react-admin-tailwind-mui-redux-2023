import '../styles/globals.css';
import { CookiesProvider } from 'react-cookie';
import { AbilityContext } from '../services/Can';
import ability from '../services/ability';
import createSettingStore from '@/Store/settingStore';
import { useEffect, useState } from 'react';
import ReactLoader from '@/Components/loader/ReactLoader';
import { LicenseInfo } from '@mui/x-license-pro';

LicenseInfo.setLicenseKey(
  '61432b3d52a6df7d10bed73649e37e56Tz02MDMxOSxFPTE3MDg1MzgzNDU2MzAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI='
);

function MyApp({ Component, pageProps }) {
  const fetchSettingData = createSettingStore(state => state.fetchSettingData);
  const loading = createSettingStore(state => state.loading);

  async function fetchSiteInfo() {
    await fetchSettingData();
  }
  useEffect(() => {
    fetchSiteInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && (
        <div className='flex h-screen'>
          <div className='m-auto'>
            <ReactLoader height={120} width={120} />
          </div>
        </div>
      )}
      {!loading && (
        <CookiesProvider>
          <AbilityContext.Provider value={ability}>
            <Component {...pageProps} />
          </AbilityContext.Provider>
        </CookiesProvider>
      )}
    </>
  );
}

export default MyApp;
