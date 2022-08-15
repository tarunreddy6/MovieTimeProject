import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  employee : Employee = new Employee(0,"Tarun","Admin",3601,new Date,350.2,23,101,"");

  constructor(private empservice:EmployeeServiceService,
              private activatedRoute:ActivatedRoute,
              private router:Router){ }
              editable : boolean=false

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( ()=>{this.getEmployeeById()});
  }

  getEmployeeById() {
    const empId=+this.activatedRoute.snapshot.paramMap.get("id");
    if(empId>0)
    {
      this.editable=true;
      console.log(empId);
      this.empservice.getEmployeeById(empId).subscribe(data => {this.employee=data});
    }
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.empservice.updateEmployee(this.employee).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/employees"); 
    }
    else{
      console.log(this.employee);
      this.empservice.saveEmployee(this.employee).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/employees");
      }
    }
}
