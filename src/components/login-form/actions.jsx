const LoginActionCreator = (session) => {
  return {
    type: "ADMIN_LOGIN_ACTION",
    session
  }
};

export {
  LoginActionCreator
};