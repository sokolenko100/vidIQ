const WEB_CLIENT_ID = 'vidiq-386218';

const API_KEY = 'AIzaSyDnuRM_U29KoUYA-YQqw_OyHOq53XDhQE4';
const SCOUPES = 'https://www.googleapis.com/auth/youtube.readonly';
const TOKEN =
  'ya29.a0AWY7CkluMkZS2Rz66Jc0T4XGwHFMU39OYYE_sfzH0U9Ch08vnLgeZxU29PY1x0S50c7POeCquu0Y5HT7rHjeljzPmBd-Jc6ovZ7TkM9RsVmQJMkunZe8e37bD6_qlTIM1vB8bsaq52KroMNMU8akuZ0DDoDibV7cZgaCgYKAdQSARESFQG1tDrp39Q6DF6BjY0wbhg1r4YDtw0169';

const URL_VIDEOS_ENDPOINT = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`;

export {WEB_CLIENT_ID, API_KEY, SCOUPES, URL_VIDEOS_ENDPOINT, TOKEN};