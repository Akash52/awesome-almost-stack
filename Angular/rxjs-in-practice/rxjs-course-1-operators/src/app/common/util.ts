import { Observable } from "rxjs";

export function createHttpObservable(url: string) {
  return Observable.create((observer) => {
    fetch("/api/courses")
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
        observer.next();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
