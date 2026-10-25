import { Component, signal } from '@angular/core';
import { StudentForm } from "./student-form/student-form";
import { StudentList } from "./student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [StudentForm, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('StudentRegistration');
  selectedStudent: any = null; // Holds the student being edited
}
