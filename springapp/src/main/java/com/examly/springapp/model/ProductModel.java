package com.examly.springapp.model;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;



@Entity
public class ProductModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long productId;
	private String productName;
	private String productModelNo;
	private String dateOfPurchase;
	private String contactNumber;
	private String problemDescription;
	private Long userId;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "productId", referencedColumnName = "productId")
	private List<AppoinementModel> appoinmentModel;
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductModelNo() {
		return productModelNo;
	}
	public void setProductModelNo(String productModelNo) {
		this.productModelNo = productModelNo;
	}
	public String getDateOfPurchase() {
		return dateOfPurchase;
	}
	public void setDateOfPurchase(String dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getProblemDescription() {
		return problemDescription;
	}
	public void setProblemDescription(String problemDescription) {
		this.problemDescription = problemDescription;
	}
	public List<AppoinementModel> getAppoinmentModel() {
		return appoinmentModel;
	}
	public void setAppoinmentModel(List<AppoinementModel> appoinmentModel) {
		this.appoinmentModel = appoinmentModel;
	}
	public ProductModel(Long productId, String productName, String productModelNo, String dateOfPurchase,
			String contactNumber, String problemDescription, List<AppoinementModel> appoinmentModel,Long userId) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productModelNo = productModelNo;
		this.dateOfPurchase = dateOfPurchase;
		this.contactNumber = contactNumber;
		this.problemDescription = problemDescription;
		this.appoinmentModel = appoinmentModel;
		this.userId = userId;
	}
	public ProductModel() {
		super();
	}
	
}

