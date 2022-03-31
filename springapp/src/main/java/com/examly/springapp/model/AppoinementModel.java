package com.examly.springapp.model;

import javax.management.loading.PrivateClassLoader;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AppoinementModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long appointmentId;
	private String bookingtime;
	private String dateofbooking;
	private String serviceCenterId;	
	public Long getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(Long appointmentId) {
		this.appointmentId = appointmentId;
	}
	public String getBookingtime() {
		return bookingtime;
	}
	public void setBookingtime(String bookingtime) {
		this.bookingtime = bookingtime;
	}
	public String getDateofbooking() {
		return dateofbooking;
	}
	public void setDateofbooking(String dateofbooking) {
		this.dateofbooking = dateofbooking;
	}
	public String getServiceCenterId() {
		return serviceCenterId;
	}
	public void setServiceCenterId(String serviceCenterId) {
		this.serviceCenterId = serviceCenterId;
	}
	
	public AppoinementModel(Long appointmentId, String bookingtime, String dateofbooking, String serviceCenterId) {
		super();
		this.appointmentId = appointmentId;
		this.bookingtime = bookingtime;
		this.dateofbooking = dateofbooking;
		this.serviceCenterId = serviceCenterId;
	}
	public AppoinementModel() {
		super();
	}
	
	
	
	
}
