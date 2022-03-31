package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.ProductRepo;
import com.examly.springapp.model.AppoinementModel;
import com.examly.springapp.model.ProductModel;
import com.examly.springapp.model.ServiceCenterModel;
@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	ProductRepo productRepo;
	@Override
	public List<ProductModel> getAllProduct() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}

	@Override
	public ProductModel addProduct(ProductModel detail) {
		// TODO Auto-generated method stub
		List<AppoinementModel> appo= new ArrayList<AppoinementModel>();
		appo.addAll(detail.getAppoinmentModel());
		AppoinementModel time=appo.get(0);
		System.out.println(time.toString());
		
		return productRepo.save(detail);
	}
	
	@Override
	public List<ProductModel> getUserProduct(Long userId) {
		// TODO Auto-generated method stub
		
		return productRepo.findByuserId(userId);
	}

	@Override
	public ResponseEntity<ServiceCenterModel> updateDetail(String productId, ProductModel detail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ProductModel getProductDetail(Long productId) {
		// TODO Auto-generated method stub
		return productRepo.findByProductId(productId);
	}

	@Override
	public String deleteCenter(Long productId) {
		// TODO Auto-generated method stub
		ProductModel detail= productRepo.findById(productId).orElse(null);
		productRepo.delete(detail);
		return "deleted";
	}

	@Override
	public ResponseEntity<ProductModel> updateDetail(Long productId, ProductModel detail) {
		// TODO Auto-generated method stub
		ProductModel p= productRepo.findById(productId).orElse(null);
		List<AppoinementModel> list= new ArrayList<AppoinementModel>();
		list.addAll(detail.getAppoinmentModel());
		p.setProductName(detail.getProductName());
		p.setContactNumber(detail.getContactNumber());
		p.setDateOfPurchase(detail.getDateOfPurchase());
		p.setProblemDescription(detail.getProblemDescription());
		p.setProductModelNo(detail.getProductModelNo());
		p.setAppoinmentModel(list);
		productRepo.save(p);
		System.out.println("yes");
		return ResponseEntity.ok(p);
	}
	
	
	
}
