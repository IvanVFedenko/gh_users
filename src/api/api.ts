import axios from 'axios';
const all_users_url = 'https://api.github.com/users?per_page=10&since=';
const users_url = 'https://api.github.com/users';

export const get_all_users = async (since: string) => {
  const request = await axios.get(`${all_users_url}${since}`);
  const all_users = request.data;
  return all_users;
};

export const get_one_user = async (login: string) => {
  let url = new URL(users_url);
  url.searchParams.set('login', `${login}`);
  const request = await axios.get(`${users_url}/${login}`);
  const user = request.data;
  return user;
};
