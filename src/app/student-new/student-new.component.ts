import { Router } from '@angular/router';
import { StudentManagementService } from './../student-management.service';
import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  student:Student;
  
  constructor(private studentService: StudentManagementService,private router: Router) {
    this.student = new Student();
  }

  ngOnInit() {

  }

  save():void{
    this.studentService.saveStudent(this.student);
    this.router.navigate(['/list']);
  }

}
