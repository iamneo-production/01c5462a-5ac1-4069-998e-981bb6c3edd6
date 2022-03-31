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

import com.examly.springapp.model.ProductModel;
import com.examly.springapp.model.ServiceCenterModel;
import com.examly.springapp.service.ProductService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {
	@Autowired
	ProductService productService;
	
	//View Appointments by the admin
	@GetMapping("/viewProduct")
	public List<ProductModel> getAllProduct(){
	//return productRepo.findAll();
		return productService.getAllProduct();
	}

	//Add Appointment
	@PostMapping("/User/AddProduct")
	public ProductModel addProduct(@RequestBody ProductModel detail) {
	//return productRepo.save(detail);
		return productService.addProduct(detail);
	}
	//find all appoinments
	@GetMapping("/viewAppointment/{userId}")
	public List<ProductModel> getUserProduct(@PathVariable Long userId){
	return productService.getUserProduct(userId);

	}
	
	@GetMapping("/viewProduct/{productId}")
	public ProductModel getProductDetail(@PathVariable Long productId){
	return productService.getProductDetail(productId);

	}
	
	//update
		@PutMapping("/productUpdate/{productId}")
		public ResponseEntity<ProductModel> updateDetail(@PathVariable Long productId, @RequestBody ProductModel detail) {
			return productService.updateDetail(productId,detail);
		}
		
	//delete
	@DeleteMapping("/deleteProduct/{productId}")
	public String deleteCenter(@PathVariable Long productId) {
		return productService.deleteCenter(productId);
	}
	
	
	
}
