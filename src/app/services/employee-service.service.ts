import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  empURL : string ="http://localhost:8080/api/emp"
  deptURL : string = "http://localhost:8080/api/dept"
  userURL:string="http://localhost:8080/api/user"
  
  constructor(private httpClient: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<GetEmployeeResponse>(this.empURL).
    pipe(map(response=>response._embedded.employees))
  }

  getAllDepartments() : Observable<Department[]>{
    return this.httpClient.get<GetDepartmentResponse>(this.deptURL).
    pipe(map(response=>response._embedded.departments))
  }

  getEmployeeById(empId:number):Observable<Employee>
  {
     const empURL=this.empURL+"/"+empId;
    return this.httpClient.get<Employee>(empURL);
  }
 
  updateEmployee(employee:Employee):Observable<Employee>
  {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Employee>(this.empURL+`/${employee.id}`,employee,httpOptions);
  }
 
  deleteEmployee(empId:number):Observable<Employee>
  {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Employee>(this.empURL+`/${empId}`,httpOptions);
  }

  saveEmployee(employee:Employee):Observable<Employee>{
    const httpOptions=
    {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-orgin':'*'
      })
    };
    return this.httpClient.post<Employee>(this.empURL,employee,httpOptions);
  }

  getEmployeesByDeptId(deptId:number):Observable<Employee[]>{
    
    const empByDeptIdUrl= "http://localhost:8080/api/emp/search/findByDeptId?id=" + deptId;
    return this.httpClient.get<GetEmployeeResponse>(empByDeptIdUrl).
      pipe(map(response=> response._embedded.employees));
  }

  getEmployeeBySearchName(ename: string) : Observable<Employee[]>{
       
    const searchUrl="http://localhost:8080/api/emp/search/findByEname?ename="+ename;
    return this.httpClient.get<GetSearchByEname>(searchUrl).
      pipe(map(response=>response._embedded.employees));
  }

  saveUser(user: User):Observable<User>{
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
      return this.httpClient.post<User>(this.userURL,user,httpOptions);
  }

}

interface GetEmployeeResponse {
  _embedded :{
    employees : Employee[]

  }
}

interface GetDepartmentResponse{
  _embedded :{
    departments : Department[]
  }
}

interface GetSearchByEname
{
 _embedded : {
   employees :Employee[]
 }
}
