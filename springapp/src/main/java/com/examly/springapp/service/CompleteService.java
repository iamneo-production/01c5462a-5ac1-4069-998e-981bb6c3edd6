package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.controller.CompletedAppointmentController;
import com.examly.springapp.model.CompletedAppointmentModel;


public interface CompleteService {
	List<CompletedAppointmentModel> getRatings();

	CompletedAppointmentModel addRating(CompletedAppointmentModel detail);

	List<CompletedAppointmentModel> getByUserid(Long userId);

	String addratings(Long appointmentId, Float rating);

	



}
