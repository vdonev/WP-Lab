import { StudentManagementService } from './../student-management.service';
import { AppComponent } from './../app.component';
import { Student } from './../model/student';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student = new Student(); // something is wrong without new Student

  constructor(
    private studentService: StudentManagementService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params:ParamMap) => this.studentService.getStudent(+params.get('index')))
      .subscribe( student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  gotoEdit(){
    this.router.navigate(['/edit', this.student.index]);
  }
}
