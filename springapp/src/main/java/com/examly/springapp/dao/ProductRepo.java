package com.examly.springapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.ProductModel;

public interface ProductRepo extends JpaRepository<ProductModel, Long> {

	List<ProductModel> findByuserId(Long userId);

	ProductModel findByProductId(Long productId);

}
