package com.examly.springapp.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class ServiceCenterModel {
    @Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String serviceCenterId;
	private String serviceCenterName;
	private String serviceCenterPhone;
	private String serviceCenterAddress;
	private String serviceCenterImageUrl;
	private String serviceCentermailId;
	private String serviceCenterDescription;
	private String serviceCenterLocation;
    public String getServiceCenterId() {
        return serviceCenterId;
    }
    public void setServiceCenterId(String serviceCenterId) {
        this.serviceCenterId = serviceCenterId;
    }
    public String getServiceCenterName() {
        return serviceCenterName;
    }
    public void setServiceCenterName(String serviceCenterName) {
        this.serviceCenterName = serviceCenterName;
    }
    public String getServiceCenterPhone() {
        return serviceCenterPhone;
    }
    public void setServiceCenterPhone(String serviceCenterPhone) {
        this.serviceCenterPhone = serviceCenterPhone;
    }
    public String getServiceCenterAddress() {
        return serviceCenterAddress;
    }
    public void setServiceCenterAddress(String serviceCenterAddress) {
        this.serviceCenterAddress = serviceCenterAddress;
    }
    public String getServiceCenterImageUrl() {
        return serviceCenterImageUrl;
    }
    public void setServiceCenterImageUrl(String serviceCenterImageUrl) {
        this.serviceCenterImageUrl = serviceCenterImageUrl;
    }
    public String getServiceCentermailId() {
        return serviceCentermailId;
    }
    public void setServiceCentermailId(String serviceCentermailId) {
        this.serviceCentermailId = serviceCentermailId;
    }
    public String getServiceCenterDescription() {
        return serviceCenterDescription;
    }
    public void setServiceCenterDescription(String serviceCenterDescription) {
        this.serviceCenterDescription = serviceCenterDescription;
    }
    public String getServiceCenterLocation() {
        return serviceCenterLocation;
    }
    public void setServiceCenterLocation(String serviceCenterLocation) {
        this.serviceCenterLocation = serviceCenterLocation;
    }
    public ServiceCenterModel(String serviceCenterId, String serviceCenterName, String serviceCenterPhone,
            String serviceCenterAddress, String serviceCenterImageUrl, String serviceCentermailId,
            String serviceCenterDescription, String serviceCenterLocation) {
        this.serviceCenterId = serviceCenterId;
        this.serviceCenterName = serviceCenterName;
        this.serviceCenterPhone = serviceCenterPhone;
        this.serviceCenterAddress = serviceCenterAddress;
        this.serviceCenterImageUrl = serviceCenterImageUrl;
        this.serviceCentermailId = serviceCentermailId;
        this.serviceCenterDescription = serviceCenterDescription;
        this.serviceCenterLocation = serviceCenterLocation;
    }
    public ServiceCenterModel() {
    }
    
}
