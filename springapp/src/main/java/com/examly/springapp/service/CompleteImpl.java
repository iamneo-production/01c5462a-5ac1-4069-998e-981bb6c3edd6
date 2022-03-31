package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.CompletedRepo;
import com.examly.springapp.model.CompletedAppointmentModel;

@Service
public class CompleteImpl implements CompleteService{
	
	@Autowired
	private CompletedRepo completedRepo;
	
	@Override
	public List<CompletedAppointmentModel> getRatings() {
		// TODO Auto-generated method stub
		return completedRepo.findAll();
	}

	@Override
	public CompletedAppointmentModel addRating(CompletedAppointmentModel detail) {
		completedRepo.save(detail);
		return detail;
	}

	@Override
	public List<CompletedAppointmentModel> getByUserid(Long userId) {
		// TODO Auto-generated method stub
		return completedRepo.findByUserId(userId);
	}

	@Override
	public String addratings(Long appointmentId, Float rating) {
		// TODO Auto-generated method stub
		CompletedAppointmentModel user= completedRepo.findById(appointmentId).orElseThrow();
		user.setRating(rating);
		completedRepo.save(user);
		return "completed";
	}

	
	
	

	

	

}

