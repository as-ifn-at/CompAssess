package com.hospital.app.repository;


import com.hospital.app.entity.Patient;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient,Integer> {
    
}
