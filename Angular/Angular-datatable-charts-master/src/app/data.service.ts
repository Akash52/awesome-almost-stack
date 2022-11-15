import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrl = "https://mock-json-server-sm.herokuapp.com/tvData";

  getTvData() {
    return this.http.get(this.apiUrl);
  }
}
