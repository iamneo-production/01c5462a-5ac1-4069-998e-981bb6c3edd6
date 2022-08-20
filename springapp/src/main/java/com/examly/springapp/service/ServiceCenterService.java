package com.examly.springapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.model.ServiceCenterModel;
public interface ServiceCenterService {

	
public List<ServiceCenterModel> getAllCenter();

public ResponseEntity<ServiceCenterModel> updateDetail( String serviceCenterId,  ServiceCenterModel detail);

public String deleteCenter(@PathVariable String serviceCenterId);

public ServiceCenterModel getCenterById(@PathVariable String serviceCenterId);

public String updateRatings(String serviceCenterId, String rating);

public ServiceCenterModel addCenter(ServiceCenterModel detail);

public String checkServicecenter(String serviceCenterName);
}
