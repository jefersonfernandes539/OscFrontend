import Cookies from "js-cookie";

export const CookiesKeys = {
  ACCESS_TOKEN: "access_token",
};

const CookiesHandle = {
  SetAccessToken: (token: string) => SetAccessToken(token),
  GetAccessToken: () => GetAccessToken(),
  ClearAuthTokens: () => ClearAuthTokens(),
};

const SetAccessToken = (token: string) => {
  Cookies.set(CookiesKeys.ACCESS_TOKEN, token, { expires: 1 });
};

const GetAccessToken = (): string | undefined => {
  return Cookies.get(CookiesKeys.ACCESS_TOKEN);
};

const ClearAuthTokens = () => {
  Cookies.remove(CookiesKeys.ACCESS_TOKEN);
};

export default CookiesHandle;
