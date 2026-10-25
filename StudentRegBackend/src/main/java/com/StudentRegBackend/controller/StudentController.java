package com.StudentRegBackend.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.StudentRegBackend.entity.Student;
import com.StudentRegBackend.service.StudentService;




@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	StudentService studentService;

	@GetMapping
	public List<Student> getAll() {
		
		Random random= new Random();
		
		studentService.add(new Student("System Generated -"+random.nextInt(),"Java"));
		
		return studentService.getStudents();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Void> delete(@RequestParam Long id) {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/{id}")
	public Student put(@PathVariable Long id, @RequestBody Student entity) {
		
		return studentService.updateStudent(entity);
	}
	
	
	
}
