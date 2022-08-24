import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl:string=environment.baseurl;

  httpHeaderOptions={
    "headers":new HttpHeaders()
    .set("content-type","application/json")
    .set("allow-all-origin","")
  }

  constructor(private http:HttpClient) { }
  getdeta(endpoint:string,param:HttpParams=new HttpParams()){
    let url=this.baseurl+endpoint;
    return this.http.get(url,(param))

  }
  postdeta(endpoint:string,data:any){

  }
}
