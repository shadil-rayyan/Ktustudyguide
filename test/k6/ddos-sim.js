import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '30s',
  thresholds: {
    'errors': ['rate<0.05'],
    'http_req_duration': ['p(95)<1000'],
  },
};

export default () => {
  http.batch([
    ['GET', 'http://localhost:3000/'],
    ['GET', 'http://localhost:3000/explorer/CS303_Algorithms_and_DataStructures'],
  ]);
  sleep(0.1); // high request frequency
};
