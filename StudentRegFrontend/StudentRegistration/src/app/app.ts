import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentForm } from "./student-form/student-form";
import { StudentList } from "./student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentForm, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('StudentRegistration');
}
