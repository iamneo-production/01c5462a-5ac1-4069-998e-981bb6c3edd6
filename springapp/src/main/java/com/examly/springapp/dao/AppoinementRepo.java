package com.examly.springapp.dao;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.AppoinementModel;
@Repository
public interface AppoinementRepo extends JpaRepository<AppoinementModel, Long>{
	@Query("SELECT COUNT(*)  FROM AppoinementModel p WHERE p.bookingtime =:time and p.dateofbooking=:date and p.serviceCenterId=:center")
	Integer existsByTime(String time, String date, String center);

	
	
	


}
