package com.examly.springapp.services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.model.ServiceCenterModel;
public interface ServiceCenterService {
    public ServiceCenterModel addCenter(ServiceCenterModel detail);
	
	public List<ServiceCenterModel> getAllCenter();
	
	public ResponseEntity<ServiceCenterModel> updateDetail( String serviceCenterId,  ServiceCenterModel detail);
	
	public String deleteCenter(@PathVariable String serviceCenterId);
	
	public ServiceCenterModel getCenterById(@PathVariable String serviceCenterId);
}
