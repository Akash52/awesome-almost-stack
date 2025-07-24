import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from './loading/loading.service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';
import { SKIP_LOADING } from './loading/skip-loading.component';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.context.get(SKIP_LOADING)) {
    return next(req);
  }
  const loadingService = inject(LoadingService);
  loadingService.loadingOn();
  return next(req).pipe(
    finalize(() => loadingService.loadingOff())
  );
};
