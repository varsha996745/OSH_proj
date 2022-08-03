import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

   private baseurl=`https://admin.eniola.app/api/v1/login`;

   loginuser(data:any){
    console.log(data);
  return this.http.post(this.baseurl,data,{responseType:`text`})
   }


}
