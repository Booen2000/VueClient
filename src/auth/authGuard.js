import { getInstance } from '@/auth/index'

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // 如果已经验证，则继续路由
    if (authService.isAuthenticated) {
      return next();
    }
    // 否则提示登录
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } })
  };

  // loading结束则检查验证
  if (!authService.loading) {
    return fn();
  }
  /*
  authService.$watch("loading", loading => {
    if (loading === false){
      return fn();
    }
  }); */
}
