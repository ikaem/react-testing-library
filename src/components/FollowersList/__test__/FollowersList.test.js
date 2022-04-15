import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { mockAxiosFollowersResponse, results } from '../../../tests/utils';
import FollowersList from '../FollowersList';

jest.mock('axios');

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  // axios.get.mockResolvedValueOnce(results);
  // axios.get.mockResolvedValue(mockAxiosFollowersResponse);
  // axios.get.mockImplementation(() => mockAxiosFollowersResponse);

  beforeEach(() => {
    axios.get.mockResolvedValueOnce(mockAxiosFollowersResponse);
  });

  beforeAll(() => {
    // render(<MockFollowersList />);
    // axios.get.mockResolvedValue(mockAxiosFollowersResponse);
  });

  test('should render first follower card', async () => {
    // axios.get.mockResolvedValueOnce(mockAxiosFollowersResponse);
    render(<MockFollowersList />);
    // const followerItemElement = screen.getByTestId('follower-item-0');
    const followerItemElement = await screen.findByTestId('follower-item-0');
    expect(followerItemElement).toBeInTheDocument();
  });

  test('should render all five elements', async () => {
    // axios.get.mockResolvedValueOnce(mockAxiosFollowersResponse);
    render(<MockFollowersList />);

    screen.debug();

    const followerItemElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerItemElements.length).toBe(5);
  });
});
