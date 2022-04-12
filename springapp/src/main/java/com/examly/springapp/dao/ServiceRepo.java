package com.examly.springapp.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.ServiceCenterModel;


public interface ServiceRepo extends JpaRepository<ServiceCenterModel, String>{

	boolean existsByServiceCenterName(String serviceCenterName);
    
}
