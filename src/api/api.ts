import axios from 'axios';
const all_users_url = 'https://api.github.com/users';

export const get_all_users = async () => {
  const request = await axios.get(all_users_url);
  const all_users = request.data;
  return all_users;
};
