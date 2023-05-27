export const ServerResponseMiddleware = () => {
  return () => ({
    response(next, renew) {
      return next().then(res => {
        const response = res.data();
        return response.data ? response.data : response;
      });
    },
  });
};
