import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.grocery',
  appName: 'grocery-app',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    "allowNavigation": ["51.20.121.181", "ec2-51-20-121-181.eu-north-1.compute.amazonaws.com"],
  }
};

export default config;
