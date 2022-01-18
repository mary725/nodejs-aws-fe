import { getTokenFromHref } from 'utils/utils';

export const checkAuth = () => {
  const loginPageUrl = `${process.env.REACT_APP_COGNITO_LOGIN_PAGE_DOMAIN}/login?client_id=${process.env.REACT_APP_COGNITO_CLIENT_ID}&response_type=${process.env.REACT_APP_COGNITO_RESPONSE_TYPE}&scope=${process.env.REACT_APP_COGNITO_SCOPE}&redirect_uri=${process.env.REACT_APP_URL}`;

  const token = getTokenFromHref();

  if (!token) {
    window.location.replace(loginPageUrl);
  }
};
