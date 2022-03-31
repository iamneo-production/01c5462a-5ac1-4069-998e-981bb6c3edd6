package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.ServiceCenterModel;
import com.examly.springapp.service.ServiceCenterService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ServiceCenterController {
    
	@Autowired
	ServiceCenterService serviceCenterService;
	
	//View Service Center
	@GetMapping("/viewServiceCenter")
	public List<ServiceCenterModel> getAllCenter(){
		return serviceCenterService.getAllCenter();
	}
	
	//Add Center
	@PostMapping("/addServiceCenter")
	public ServiceCenterModel addCenter(@RequestBody ServiceCenterModel detail) {
		return serviceCenterService.addCenter(detail);
	}
	
	//find by id
	@GetMapping("/findCenterById/{serviceCenterId}")
	public ServiceCenterModel getCenterById(@PathVariable String serviceCenterId) {
		return serviceCenterService.getCenterById(serviceCenterId);
	}
	
	@GetMapping("/updateRatings/{serviceCenterId}&{rating}")
	public String updateRatings(@PathVariable String serviceCenterId, @PathVariable String rating) {
		return serviceCenterService.updateRatings(serviceCenterId,rating);
	}
	//update
	@PutMapping("/centerUpdate/{serviceCenterId}")
	public ResponseEntity<ServiceCenterModel> updateDetail(@PathVariable String serviceCenterId, @RequestBody ServiceCenterModel detail) {
		return serviceCenterService.updateDetail(serviceCenterId,detail);
	}
	
	//delete
	@DeleteMapping("/deleteCenter/{serviceCenterId}")
	public String deleteCenter(@PathVariable String serviceCenterId) {
		return serviceCenterService.deleteCenter(serviceCenterId);
	}
}
