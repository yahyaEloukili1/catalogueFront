import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product  } from "../models/Product";
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  host= 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getResource(resource: String,page,size):Observable<Product[]>{
      return this.http.get<Product[]>(`${this.host}/${resource}?page=${page}&size=${size}`);
  }
  addResource(resource: string,value:any):Observable<Product>{
    return this.http.post<Product>(`${this.host}/${resource}`,value);
}
  getResourceByKeyword(resource: String,page,size,mc):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/${resource}/search/byDesignationPage?mc=${mc}&page=${page}&size=${size}`);
}
deleteResource(resource,url){
 return this.http.delete(url);
}

}
