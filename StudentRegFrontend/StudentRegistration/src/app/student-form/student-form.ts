import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../model/student';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule, NgIf],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})

export class StudentForm {


  constructor(private studentService: StudentService) { }


  @Input() StudentToEdit: Student | null = null;        // get data from form?
  @Output() refreshList = new EventEmitter<Student>();  // parent component to update list.



  Student: Student = new Student();

  onSubmit() {
    console.log('Form submitted:', this.Student);

    if (this.Student.id) {
      this.studentService.updatStudent(this.Student.id, this.Student)
        .subscribe(() => this.resetFormAndRefresh())
    } else {
      this.studentService.addStudent(this.Student)
        .subscribe(() => this.resetFormAndRefresh())
    }


  }


  ngOnChanges() {
    if (this.StudentToEdit) {
      this.Student = { ...this.StudentToEdit };
    }
  }

  resetForm() {
    this.Student = { name: "", email: "", course: "" }
    this.refreshList.emit(); // emit event to parent component
  }

  resetFormAndRefresh() {

    this.Student = { name: "", email: "", course: "" }
    this.refreshList.emit();



  }




}




