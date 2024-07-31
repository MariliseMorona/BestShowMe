import 'dotenv/config';

export default {
  expo: {
    extra: {
      baseURLIOS: process.env.BASE_URL_IOS,
      baseURLAndroid: process.env.BASE_URL_ANDROID,
    },
  },
};