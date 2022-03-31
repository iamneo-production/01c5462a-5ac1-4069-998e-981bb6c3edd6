package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.UserRepo;
import com.examly.springapp.model.UserModel;



@Service
public class UserServiceImpl implements UserService{
	

    @Autowired
    public UserRepo userrepo;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //to print all users
	@Override
	public List<UserModel> getAllEmployee(){
		return userrepo.findAll();
	}

    // add new users
	public UserModel createEmployee(UserModel detail) {
		detail.setPassword(passwordEncoder.encode(detail.getPassword()));
		userrepo.save(detail);
		
		return detail;
	}
	
	//get by id
		public UserModel getDetailById(Long id) {
			return userrepo.findById(id).orElseThrow();
		}
		
		//updateDetail
		public ResponseEntity<UserModel> updateDeatil(Long id, UserModel detail) {
			UserModel user =userrepo.findById(id)
					.orElseThrow();
			
			user.setUsername(detail.getUsername());
			user.setEmail(detail.getEmail());
			user.setMobileNumber(detail.getMobileNumber());
			user.setUserRole(detail.getUserRole());
			user.setPassword(detail.getPassword());
			
			
			UserModel update =userrepo.save(user);
			return ResponseEntity.ok(update);
		}
		
		public String existsByemail(String email) {
			return((userrepo.existsByemail(email)) ? "true" :"false" );
		}

		public String existsByemailAndpassword(String email, String password) {
			return((userrepo.existsByemailAndPassword(email, password))? "true" :"false");
		}
		
		public UserModel getDetailByemail(String email) {

			 return userrepo.getDetailByemail(email);
			 
		}
		
		public String deleteById(Long id) {
			userrepo.deleteById(id);
			return "deleted";
		}

		@Override
		public String existsByemailandusername(String email, String username) {
			// TODO Auto-generated method stub
			String b=userrepo.existsByemailAndUsername(email, username)? "true" :"false";
			System.out.println(b);
			return (b);
			
		}

		@Override
		public UserModel getDetailByusername(String username) {
			// TODO Auto-generated method stub
			
			return userrepo.getDetailByusername(username);
		}
}