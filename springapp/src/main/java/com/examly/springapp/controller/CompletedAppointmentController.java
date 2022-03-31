package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.CompletedAppointmentModel;
import com.examly.springapp.service.CompleteService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CompletedAppointmentController {
	@Autowired
	private CompleteService completeService;
	
	@GetMapping("/viewRatings")
	public List<CompletedAppointmentModel> getRatings(){
		return completeService.getRatings();
	}
	//Add Ratings
	@PostMapping("/addRatings")
	public CompletedAppointmentModel addRating(@RequestBody CompletedAppointmentModel detail) {
		return completeService.addRating(detail);
	}
	
	//find by userId
	@GetMapping("/findByUserId/{userId}")
	public List<CompletedAppointmentModel> getByuserId(@PathVariable Long userId){
		return completeService.getByUserid(userId);
	}
	
	@GetMapping("/addAppointmentStars/{appointmentId}&{rating}")
	public String addratings(@PathVariable Long appointmentId, @PathVariable Float rating) {
		return completeService.addratings(appointmentId, rating);
	}
	


}
