package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.AuthRequest;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;
import com.examly.springapp.util.JwtUtil;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
    public UserService userservice;
	
	@Autowired
    private JwtUtil jwtUtil;
	
    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            
        } catch (Exception ex) {
            throw new Exception("inavalid username/password");
        }
        return jwtUtil.generateToken(authRequest.getUsername());
    }

    @GetMapping("/UserView")
	public List<UserModel> getAllEmployee(){
		return userservice.getAllEmployee();
	}

    //add
	@PostMapping("/UserAdd")
	public UserModel createEmployee(@RequestBody UserModel detail) {
		return userservice.createEmployee(detail);
	}
	
	//find by id
		@GetMapping("/UserFind/{id}")
		public UserModel getDetailById(@PathVariable Long id) {
			
			return userservice.getDetailById(id);
		}
		
		//update
		@PutMapping("UserUpdate/{id}")
		public ResponseEntity<UserModel> updateDetail(@PathVariable Long id, @RequestBody UserModel detail) {
			return userservice.updateDeatil(id,detail);
		}
		
		//Find mail id is already exixts or not
		@GetMapping("/getByMailId/{email}&{username}")
		public String existsByemail(  @PathVariable String email, @PathVariable String username) {
				return(userservice.existsByemailandusername(email,username));
					
		}
		
		//check email and password is exixts or not
		@GetMapping("/getByEmailandpassword/{email}&{password}")
		 public String existsByemailAndPassword(  @PathVariable String email , @PathVariable String password) {
			return(userservice.existsByemailAndpassword(email,password));
				
		}
		
		//find by emailId
		@GetMapping("/getByemail/{email}")
		public UserModel getDetailByemail(@PathVariable String email) {
			 return userservice.getDetailByemail(email);
			
		}
		
		@GetMapping("/getByusername/{username}")
		public UserModel getDetailByusername(@PathVariable String username) {
			 return userservice.getDetailByusername(username);
			
		}
		
		@DeleteMapping("/Userdelete/{id}")
		public String deleteById(@PathVariable("id") Long id) {
		     return userservice.deleteById(id);
		 }
}
