import { request } from '@octokit/request';

export const getPublicEventsRequest = async () => {
  const response = await request('GET /events?per_page=25');

  return response.data;
};
