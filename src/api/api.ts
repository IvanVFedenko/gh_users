import axios from 'axios';
const users_url = 'https://api.github.com/users';

export const get_all_users = async (per_page: string, since: string) => {
  let url = new URL(users_url);
  url.searchParams.set('per_page', `${per_page}`);
  url.searchParams.set('since', `${since}`);
  console.log(url);

  const request = await axios.get(`${url}`);
  const all_users = request.data;
  return all_users;
};

export const get_one_user = async (login: string) => {
  const request = await axios.get(`${users_url}/${login}`);
  const user = request.data;
  return user;
};
