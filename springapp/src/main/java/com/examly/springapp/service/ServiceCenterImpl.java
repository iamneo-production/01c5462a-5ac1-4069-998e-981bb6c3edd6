package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.examly.springapp.dao.ServiceRepo;
import com.examly.springapp.model.ServiceCenterModel;

@Service
public class ServiceCenterImpl implements ServiceCenterService{
    
	
	
	@Autowired
	ServiceRepo serviceCenterRepo;
	
	//view
	public List<ServiceCenterModel> getAllCenter(){
		return serviceCenterRepo.findAll();
	}
	
	//add center
	public ServiceCenterModel addCenter(ServiceCenterModel detail) {
		serviceCenterRepo.save(detail);
		return detail;
	}
	
	public ResponseEntity<ServiceCenterModel> updateDetail( String serviceCenterId,  ServiceCenterModel detail){
		ServiceCenterModel user = serviceCenterRepo.findById(serviceCenterId)
				.orElseThrow();
		
		user.setServiceCenterAddress(detail.getServiceCenterAddress());
		user.setServiceCenterDescription(detail.getServiceCenterDescription());
		user.setServiceCentermailId(detail.getServiceCentermailId());
		user.setServiceCenterName(detail.getServiceCenterName());
		user.setServiceCenterPhone(detail.getServiceCenterPhone());
		
		
		
		ServiceCenterModel update =serviceCenterRepo.save(user);
		return ResponseEntity.ok(update);
	}
	
	public String deleteCenter(@PathVariable String serviceCenterId) {
		serviceCenterRepo.deleteById(serviceCenterId);
		return "deleted";
	}
	
	public ServiceCenterModel getCenterById(@PathVariable String serviceCenterId) {
		return serviceCenterRepo.findById(serviceCenterId).orElseThrow();
	}

	@Override
	public String updateRatings(String serviceCenterId, String rating) {
		// TODO Auto-generated method stub
		ServiceCenterModel centerModel= serviceCenterRepo.findById(serviceCenterId).orElseThrow();
		float a= Float.parseFloat(centerModel.getRating());
		float b=Float.parseFloat(rating);
		float c;
		if(a<1) {
			c=b;
		}
		else {
			c=(a+b)/2;
		}
		String s=Float. toString(c);
		centerModel.setRating(s);
		serviceCenterRepo.save(centerModel);
		return s;
	}

}
