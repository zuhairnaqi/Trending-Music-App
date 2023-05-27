import AuthenticationTokenHelper from '../helper/AuthenticationTokenHelper';

export const AccessTokenMiddleware = () => {
  return () => ({
    request(request) {
      return Promise.resolve(
        request.enhance({
          headers: {
            Authorization: AuthenticationTokenHelper.authToken
              ? `Bearer ${AuthenticationTokenHelper.authToken}`
              : null,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: 0,
            platform: 'mobile-buyer',
            app_version: '1.0.0',
          },
        }),
      );
    },
  });
};