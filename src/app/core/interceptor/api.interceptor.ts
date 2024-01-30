import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const headers = request.headers.set('Content-Type', 'application/json');
  const baseUrl = 'http://localhost:8080';
  let req = request.clone({
    url: `${baseUrl}${request.url}`,
    headers,
  });
  return next(req);
};
