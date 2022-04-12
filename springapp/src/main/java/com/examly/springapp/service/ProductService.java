package com.examly.springapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.examly.springapp.model.ProductModel;
import com.examly.springapp.model.ServiceCenterModel;

public interface ProductService {

	List<ProductModel> getAllProduct();

	ProductModel addProduct(ProductModel detail);

	

	List<ProductModel> getUserProduct(Long userId);

	ResponseEntity<ServiceCenterModel> updateDetail(String productId, ProductModel detail);

	ProductModel getProductDetail(Long productId);

	String deleteCenter(Long productId);

	ResponseEntity<ProductModel> updateDetail(Long productId, ProductModel detail);

}