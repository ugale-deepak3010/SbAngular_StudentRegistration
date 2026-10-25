import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  students: Student[] = [];
  @Output() edit = new EventEmitter<Student>();
  @Output() delete = new EventEmitter<Number>();

  constructor(private studentService: StudentService) { }

  editStudent(student: Student) {

    this.edit.emit(student);
  }

  deleteStudent(id: Number) {

    if (confirm("Are you sure to delete?")) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }

  }

  ngOnInit(): void { // initially load all list.
    this.loadStudents();
  }

  ngOnChanges(): void { // on change refresh all list.
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log("Successfully loaded students inside component:", data);
      },
      error: (err) => {
        console.error("Failed to load from API!", err);
        alert("API Error! Check your browser console. It might be a CORS error from Spring Boot.");
        // Add a fake student just so we can prove the list WORKS visually
        this.students = [{ id: 99, name: 'Fake test student (API failed)', email: 'test', course: 'Test' }];
      }
    });
  }

}
