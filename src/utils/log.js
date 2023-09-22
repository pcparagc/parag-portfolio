import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDlmszHN4KbIrksIM_LjpdyXT3fE_S3VL8',
  authDomain: 'paragchaudhari-76ce0.firebaseapp.com',
  projectId: 'paragchaudhari-76ce0',
  storageBucket: 'paragchaudhari-76ce0.appspot.com',
  messagingSenderId: '125886833523',
  appId: '1:125886833523:web:7d66045e2b7c8d69789b06',
  measurementId: '',
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
