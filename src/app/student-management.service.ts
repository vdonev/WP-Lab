import { Student } from './model/student';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentManagementService {

  constructor() { }

  STUDENTS = [{
    ime:'Marko',
    prezime:'Markov',
    index:145524,
    nasoka:'KNI'
  },
  {
    ime:'Jovan',
    prezime:'Jovanov',
    index:778442,
    nasoka:'KNI'
  },
  {
    ime:'Ivan',
    prezime:'Panev',
    index:668482,
    nasoka:'IKI'
  },
  {
    ime:'Sime',
    prezime:'Ile',
    index:112151,
    nasoka:'PET'
  }];

  getStudents():Promise<Student[]>{
    return Promise.resolve(this.STUDENTS);
  }

  getStudent(index:number):Promise<Student>{
    return this.getStudents().then(students => students.find(student => student.index== index));
  }

  saveStudent(student:Student):void{
    this.STUDENTS.push(student);
  }

  check(ind:number):boolean{
    for (let st of this.STUDENTS){
      if(st.index == ind){
        return true;
      }
    }
    return false;
  }
  
}
