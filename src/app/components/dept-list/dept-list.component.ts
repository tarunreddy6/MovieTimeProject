import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  department: import("d:/typescript_24/mythraproject/src/app/common/department").Department[];

  constructor(private empservice:EmployeeServiceService,
              private route:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{
      this.getAllDepartment()
    });
  }

  getAllDepartment(){
    this.empservice.getAllDepartments().subscribe(data=>{
      this.department = data
    });
  }
}
