import { StudentManagementService } from './../student-management.service';
import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] ;
  currentStudent: Student;

  constructor(private studentManagementService: StudentManagementService,
              private router: Router){
  }

  ngOnInit(): void {
    this.studentManagementService.getStudents()
        .then(students => this.students = students)
        .catch( k => console.error(k));
  }
  
  onSelect(student:Student){
    this.currentStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.currentStudent.index]);
  }

  addNewStudent():void{
    this.router.navigate(['/new']);
  }
}
