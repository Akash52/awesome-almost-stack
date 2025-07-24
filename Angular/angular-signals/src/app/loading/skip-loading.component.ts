import { HttpContextToken } from "@angular/common/http";
export  const skipLoading = new HttpContextToken<boolean>(() => false);
export const SKIP_LOADING = skipLoading;
