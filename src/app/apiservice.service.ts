import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

//  connect frontend to backend
 
apiUrl='http://localhost:3000/user';
 
apiUrl1='http://localhost:3000/sign';
//get all data

getAllData():Observable<any>
{
   return this._http.get(`${this.apiUrl}`);
}
//create data
createData(data:any):Observable<any>{
 
 console.log(data,'createapi=>')
  return this._http.post(`${this.apiUrl}`,data);

}
signUP(data:any):Observable<any>{
 
  console.log(data,'createapi=>')
   return this._http.post(`${this.apiUrl1}`,data);
 
 }
deletedata(id:any):Observable<any>{
 
  console.log(id,'delete=>')
   return this._http.get(`${this.apiUrl+"/delete/"+id}`);
 
 }


getProduct(){
  return this._http.get<any>("https://fakestoreapi.com/products")
  .pipe(map((res:any)=>{
return res;
  }))
}





}
