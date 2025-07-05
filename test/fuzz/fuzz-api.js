import { randomString } from 'randomstring';
import http from 'k6/http';

export let options = {
  vus: 20,
  duration: '1m',
};

export default () => {
  const path = `/explorer/${randomString({ length: Math.floor(Math.random() * 50) })}`;
  const res = http.get(`http://localhost:3000${path}`);
  if (res.status >= 500) {
    console.error(`Error ${res.status} on path ${path}`);
  }
};
