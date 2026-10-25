import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { of, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StudentService { // only inside methods I added.



  private baseUrl = 'http://localhost:8080/api/students';


  constructor(private http: HttpClient) { }

  updatStudent(id: Number, student: Student): Observable<Student> {

    return this.http.put<Student>(this.baseUrl + '/' + id, student);

  }


  addStudent(student: Student): Observable<Student> {

    return this.http.post<Student>(this.baseUrl, student);
  }

  getStudents(): Observable<Student[]> {

    let students: Student[] = [];

    let s1 = new Student();
    s1.id = 1;
    s1.name = "Dipak";
    s1.email = "[EMAIL_ADDRESS]";
    s1.course = "Java";
    students.push(s1);

    let s2 = new Student();
    s2.id = 2;
    s2.name = "John";
    s2.email = "[EMAIL_ADDRESS]";
    s2.course = "Angular";
    students.push(s2);

    let s3 = new Student();
    s3.id = 3;
    s3.name = "Jane";
    s3.email = "[EMAIL_ADDRESS]";
    s3.course = "Python";
    students.push(s3);


    //return of(students);
    return this.http.get<Student[]>(this.baseUrl).pipe(
      tap(data => console.log('Fetched students data:', data))
    );
  }
  deleteStudent(id: Number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }



}
