package com.examly.springapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.AppoinementRepo;

import com.examly.springapp.model.AppoinementModel;

import antlr.collections.List;

@Service
public class AppoinmentServiceImpl implements AppoinmentServices{
	@Autowired
	AppoinementRepo appoinementRepo;
	
	@Override
	public java.util.List<AppoinementModel> getAllAppoinments() {
		// TODO Auto-generated method stub
		return appoinementRepo.findAll();
	}

	@Override
	public Boolean appoinementExists(AppoinementModel detail) {
		// TODO Auto-generated method stub
		String time=detail.getBookingtime();
		String date=detail.getDateofbooking();
		String center=detail.getServiceCenterId();
		if(existsByTime(time,date,center)<1) {
			
			return true;
		}
		return false;
	}

	private Integer existsByTime(String time, String date, String center) {
		// TODO Auto-generated method stub
		return appoinementRepo.existsByTime(time,date,center);
	}

	@Override
	public String deleteAppoinment(Long appointmentId) {
		// TODO Auto-generated method stub
		
		 appoinementRepo.deleteById(appointmentId);
		 return "deleted";
	}

	

	
	
	
	
	

}
