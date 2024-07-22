// capacitor.config.ts

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kapalijyotishkendra.app',
  appName: 'Kapali Jyotish Kendra',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      backgroundColor: '#ffffff'
    },
    StatusBar: {
      style: 'light'
    }
  },
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  }
};

export default config;
