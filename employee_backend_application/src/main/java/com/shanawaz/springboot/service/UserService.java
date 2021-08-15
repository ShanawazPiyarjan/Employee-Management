package com.shanawaz.springboot.service;

import java.util.List;

import com.shanawaz.springboot.model.User;

public interface UserService {

	Integer saveEmployee(User e);
	
	List<User> getAllEmployees();
	
	User findById(Integer id);
	
	void deleteEmployee(User user);
	
//	User findByEmail(String email);
}
