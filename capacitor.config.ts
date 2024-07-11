// capacitor.config.ts

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kapalijyotishkendra.app',
  appName: 'Kapali Jyotish Kendra',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      androidScaleType: 'CENTER_CROP',
      iosSplashImageName: 'splash',
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
