import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { Employee } from 'src/app/common/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-emp-list-user',
  templateUrl: './emp-list-user.component.html',
  styleUrls: ['./emp-list-user.component.css']
})
export class EmpListUserComponent implements OnInit {
  employees : Employee[];
  department : Department[];
  searchName : string;
  currentDeptId : number;

  constructor(private empservice:EmployeeServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllEmployees()})
      this.getAllDepartment();
  }

  getAllDepartment() {
    this.empservice.getAllDepartments().
    subscribe(data=>{      
      this.department=data
    });
  }
  getAllEmployees() {
    const hasDeptId:boolean = this.activeRoute.snapshot.paramMap.has("deptId");
    const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("ename");
    if(hasDeptId){
      this.currentDeptId = +this.activeRoute.snapshot.paramMap.get("deptId");
      this.empservice.getEmployeesByDeptId(this.currentDeptId).subscribe(data => {
        console.log(data);
        this.employees = data;
      })
  
    }
    
    else if(hassearchName)
    {
  
      this.searchName=this.activeRoute.snapshot.paramMap.get("ename");
      console.log(this.searchName);
      this.empservice.getEmployeeBySearchName(this.searchName).subscribe(data=>{
          console.log(data);
        this.employees=data;
      });
    
    }
    else {
        this.empservice.getAllEmployees().subscribe(data => {
          console.log(data);
          this.employees = data;
        })
    }
  
  }

}
