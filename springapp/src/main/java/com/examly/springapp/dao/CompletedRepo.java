package com.examly.springapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.CompletedAppointmentModel;

@Repository
	public interface CompletedRepo extends JpaRepository<CompletedAppointmentModel,Long>{

		List<CompletedAppointmentModel> findByUserId(Long userId);

		


		

		

	}



