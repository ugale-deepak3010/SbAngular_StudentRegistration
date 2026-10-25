package com.StudentRegBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentRegBackend.entity.Student;
import com.StudentRegBackend.repository.StudentRepo;

@Service
public class StudentService {

	@Autowired
	StudentRepo studentRepo;
	
	public List<Student> getStudents(){
		
		return studentRepo.findAll();
	}
	
	public void deleteStudent(Long id) {
		studentRepo.findById(id).ifPresent(s->studentRepo.delete(s));
	}
	
	public Student add(Student student){
		return studentRepo.save(student);
	}
	
	public Student updateStudent(Student student){
		return studentRepo.save(student);
	}
	
}
