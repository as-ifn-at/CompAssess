package com.hospital.app;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;

import javax.transaction.Transactional;

import com.hospital.app.controller.DoctorController;
import com.hospital.app.controller.PatientController;
import com.hospital.app.entity.Doctor;
import com.hospital.app.entity.Patient;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class NewServerApplicationTests 
{

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    PatientController patientController;

    @Autowired
     DoctorController doctorController;


    @Test
    public void test(){
        assertTrue(true);
    }
    @Test
    public void  showPatientInformationTest(){
        Patient patient =patientController.showPatientInformation(11);
        assertEquals(patient.getName(),"Asit Mittal");
    }

    @Test
    public void showDoctorInformationTest(){
        Doctor doc = doctorController.getDoctorInfo("DR. ABHI RAY"); 
        assertEquals(doc.getField(),"EYE");
        
    }

    @Test
    @DirtiesContext
    @Transactional
    public void saveDoctorInformation(){
        Doctor doc = new Doctor("Amy", 12, "female", "abc");
        boolean res=doctorController.addUser(doc);
        assertTrue(res);
    }

    @Test
    @DirtiesContext
    @Transactional
    public void savePatientInformation(){
        Patient patient = new Patient(1001, "Amy", 30, "DR. ABHI RAY",LocalDate.now(), "male", "xyz");
        boolean res = patientController.createPatient(patient);
        assertTrue(res);
    }
}
