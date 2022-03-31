package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CompletedAppointmentModel {
	
	@Id
	private Long appointmentId;
	private Long userId;
	private String serviceCenterId;
	private String bookingtime;
	private String dateofbooking;
	private Float rating;
	public Long getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(Long appointmentId) {
		this.appointmentId = appointmentId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getServiceCenterId() {
		return serviceCenterId;
	}
	public void setServiceCenterId(String serviceCenterId) {
		this.serviceCenterId = serviceCenterId;
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
	
	public Float getRating() {
		return rating;
	}
	public void setRating(Float rating) {
		this.rating = rating;
	}
	public CompletedAppointmentModel(Long appointmentId, Long userId, String serviceCenterId, String bookingtime,
			String dateofbooking, float rating) {
		super();
		this.appointmentId = appointmentId;
		this.userId = userId;
		this.serviceCenterId = serviceCenterId;
		this.bookingtime = bookingtime;
		this.dateofbooking = dateofbooking;
		this.rating = rating;
	}
	public CompletedAppointmentModel() {
		super();
	}
	
	
	
	
	
}

