import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { Employee } from 'src/app/common/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: Employee[];
  department: import("d:/typescript_24/mythraproject/src/app/common/department").Department[];

  constructor(private empservice : EmployeeServiceService,
              private route:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllEmployees()
    });
  }

  getAllEmployees(){
    this.empservice.getAllEmployees().subscribe(data=>{
      this.employees = data
    });
  }

  addEmpForm(){
    this.route.navigateByUrl("/empform")
  }

  updateEmp(id:number){
    console.log(id);
    this.route.navigateByUrl("/editEmp/"+id);
  }

  deleteEmp(empId:number){
    if(confirm("Are you sure Do you want to delete.!")){
      this.empservice.deleteEmployee(empId).subscribe(data=>{
        console.log("deleted")
        this.getAllEmployees();
      })
    }
  }
}