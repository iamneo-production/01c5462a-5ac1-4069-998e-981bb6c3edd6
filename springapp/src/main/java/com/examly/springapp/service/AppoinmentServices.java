package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.AppoinementModel;



public interface AppoinmentServices {

	List<AppoinementModel> getAllAppoinments();

	Boolean appoinementExists(AppoinementModel detail);

	String deleteAppoinment(Long appointmentId);

	
}
