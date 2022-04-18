// src\__mocks__\axios.js

import { mockAxiosFollowersResponse } from '../tests/utils';

const mockAxios = {
  get: jest.fn().mockResolvedValue(mockAxiosFollowersResponse),
};

export default mockAxios;


