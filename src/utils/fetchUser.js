import jwt_decode from "jwt-decode";

export const fetchUser = () => {
  const userInfo = jwt_decode(
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear()
  );
  return userInfo;
};
