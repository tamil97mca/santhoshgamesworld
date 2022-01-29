import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  findByCriteria(collectionName: string, criteria: any)
  {
    const url = environment.url + collectionName + "/_find";
    const HttpRequest = this.http.post(url, criteria);
    return this.promiseMethod(HttpRequest);
  }

  promiseMethod(HttpRequest: any)
  {
    const promise = new Promise( resolve => {
      HttpRequest.toPromise().then((res: any) => {
        resolve(this.response("success", '', res));
      }).catch((err: any) => {
        resolve(this.response("failed", err.message, []))
      })
    })
    return promise;
  }


  response(status: string, message: string, records: [])
  {
    let responseData = {
      status: status,
      message: message,
      records: records,
    }
    return responseData
  }
}
