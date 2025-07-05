import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

export let latencyTrend = new Trend('latency');
export let errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: '1m', target: 50 },   // warm-up
    { duration: '3m', target: 200 },  // steady load
    { duration: '2m', target: 500 },  // stress
    { duration: '2m', target: 0 },    // cool-down
  ],
  thresholds: {
    errors: ['rate<0.01'],
    'http_req_duration': ['p(95)<500'], // 95% requests < 500ms
  },
};

export default () => {
  let responses = http.batch([
    ['GET', 'http://localhost:3000/'],
    ['GET', 'http://localhost:3000/explorer/CS303_Algorithms_and_DataStructures'],
    ['GET', 'http://localhost:3000/explorer/MATH401_Real_Analysis'],
  ]);

  responses.forEach((res) => {
    const ok = check(res, {
      'status was 200': (r) => r.status === 200,
    });
    errorRate.add(!ok);
    latencyTrend.add(res.timings.duration);
  });

  sleep(Math.random() * 3); // simulate user think time
};
