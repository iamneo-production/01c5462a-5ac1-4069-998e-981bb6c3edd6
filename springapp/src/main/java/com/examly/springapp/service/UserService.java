package com.examly.springapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.examly.springapp.model.UserModel;



public interface UserService {
	
	public List<UserModel> getAllEmployee();

    public UserModel createEmployee(UserModel detail);
    
    public UserModel getDetailById(Long id);
	
	public ResponseEntity<UserModel> updateDeatil(Long id,UserModel detail);
	
	public String existsByemail(String email);
	
	public String existsByemailAndpassword(String email, String password);
	
	public UserModel getDetailByemail(String email);
	
	public String deleteById(Long id);

	public String existsByemailandusername(String email, String username);

	public UserModel getDetailByusername(String username);
}
