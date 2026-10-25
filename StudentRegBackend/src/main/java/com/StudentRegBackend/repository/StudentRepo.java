package com.StudentRegBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.StudentRegBackend.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

}
