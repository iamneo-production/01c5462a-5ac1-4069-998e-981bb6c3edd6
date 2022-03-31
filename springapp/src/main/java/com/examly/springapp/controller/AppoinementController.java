package com.examly.springapp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.*;
import com.examly.springapp.service.AppoinmentServices;
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AppoinementController {
	@Autowired
	AppoinmentServices appoinmentServices;
	@GetMapping("/AllAppoinments")
	public List<AppoinementModel> getAllAppoinments(){
		return appoinmentServices.getAllAppoinments();
	}
	
	@PostMapping("/CheckAppoinments")
	public Boolean appoinementExists(@RequestBody AppoinementModel detail) {
		return appoinmentServices.appoinementExists(detail);
	}
	
	//delete
	@DeleteMapping("/deleteappointmentId/{appointmentId}")
	public String deleteAppoinment(@PathVariable Long appointmentId) {
		return appoinmentServices.deleteAppoinment(appointmentId);
	}

}
