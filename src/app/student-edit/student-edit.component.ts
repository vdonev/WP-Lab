import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StudentManagementService } from './../student-management.service';
import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student:Student;
  editingStudent:Student;
  constructor(
    private studentService: StudentManagementService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { 
    this.student = new Student();
    this.editingStudent = new Student();
  }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params:ParamMap) => this.studentService.getStudent(+params.get('index')))
    .subscribe( student => { this.student = student ; 
      this.editingStudent.ime = this.student.ime;
      this.editingStudent.prezime = this.student.prezime;
      this.editingStudent.index = this.student.index;
      this.editingStudent.nasoka = this.student.nasoka;
      });
    
  }

  edit():void{
    this.student.ime = this.editingStudent.ime;
    this.student.prezime = this.editingStudent.prezime;
    this.student.index = this.editingStudent.index;
    this.student.nasoka = this.editingStudent.nasoka;
    console.log(this.editingStudent);
  }

  save():void{
    this.studentService.saveStudent(this.editingStudent);
    this.router.navigate(['/list']);    
  }
  
  isValid():boolean{
    return this.studentService.check(this.editingStudent.index);
  }
}
