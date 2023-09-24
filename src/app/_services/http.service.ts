import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  todo:any;
  constructor(private http: HttpClient) {}
  /* 
  this.http.get("https://jsonplaceholder.typicode.com/todos");///
  this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`,todoId);
 this.http.post(`https://jsonplaceholder.typicode.com/todos`,data);
 this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data);

*/

gettodos(todoid:number=1){
  return this.http.get("https://jsonplaceholder.typicode.com/todos");///
}
getTodoData(todoId: number = 1) {
  return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
}


deletetododata(todoId:any){
  return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`,todoId);
 }

posttododata(data:any){
  return this.http.post(`https://jsonplaceholder.typicode.com/todos`,data);
 }
 puttododata(data:any){
  return this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data);

 }

}
