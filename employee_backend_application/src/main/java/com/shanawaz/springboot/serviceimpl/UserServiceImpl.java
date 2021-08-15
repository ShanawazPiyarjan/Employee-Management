package com.shanawaz.springboot.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shanawaz.springboot.exceptionhandling.EmployeeNotFoundException;
import com.shanawaz.springboot.model.User;
import com.shanawaz.springboot.repository.UserRepository;
import com.shanawaz.springboot.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public Integer saveEmployee(User e) {

		Integer id = userRepository.save(e).getId();

		return id;
	}

	@Override
	public List<User> getAllEmployees() {

		List<User> list = userRepository.findAll();
		return list;

	}

	@Override
	public User findById(Integer id)  {
		
		Optional<User> opt = userRepository.findById(id);
		User emp = null;
		if(opt.isPresent())
		{
			emp = opt.get();
		}
		else
		{
			System.out.println("Employee not found..!!");
		}
		return emp;
		
	}

	@Override
	public void deleteEmployee(User user) {
		userRepository.delete(user);
		
	}

//	@Override
//	public User findByEmail(String email)  {
//		return userRepository.findOne(email);
//		Optional<User> optEmail = userRepository.findOne(email);
//		User empEmail = null;
//		if(optEmail.isPresent())
//		{
//			empEmail = optEmail.get();
//		}
//		else
//		{
//			System.out.println("Employee not found..!!");
//		}
//		return empEmail;
		
//	}

}
