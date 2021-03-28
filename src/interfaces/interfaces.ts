export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface DetailedUser extends User {
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  followers: number;
  following: number;
  hireable: null;
  location: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string;
  updated_at: string;
}
