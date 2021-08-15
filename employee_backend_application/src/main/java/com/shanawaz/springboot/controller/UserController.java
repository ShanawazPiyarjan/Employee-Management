package com.shanawaz.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.shanawaz.springboot.model.User;

import com.shanawaz.springboot.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;

//	//1.save employee
	@PostMapping("/save")
	public ResponseEntity<String> saveEmployee(@RequestBody User e) {
		Integer id = userService.saveEmployee(e);
		return new ResponseEntity<String>("Employee " + "'" + id + "'" + " saved", HttpStatus.OK);
	}

	// 2. get all employees
	@GetMapping("/allemployees")
	public ResponseEntity<List<User>> getAllEmployees() {

		List<User> list = userService.getAllEmployees();
		
		
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
	
	//3. get employee by id
	@GetMapping("/allemployees/{id}")
	public ResponseEntity<User> getEmpById(@PathVariable Integer id)
	{
		User employee = userService.findById(id);
		return new ResponseEntity<User>(employee, HttpStatus.OK);
	}
	
	//4. update employee rest api
	@PutMapping("/employees/update/{id}")
	public ResponseEntity<String> updateEmpById(@PathVariable Integer id, @RequestBody User employee)
	{
		User emp = userService.findById(id);
		
		emp.setName(employee.getName());
		emp.setEmail(employee.getEmail());
		emp.setAddress(employee.getAddress());
		emp.setMobile(employee.getMobile());
		emp.setDob(employee.getDob());
		emp.setGender(employee.getGender());
		emp.setPassword(employee.getPassword());
		
		Integer updatedUser = userService.saveEmployee(emp);
		
		return new ResponseEntity<String>("Employee"+" '" +updatedUser +"' "+" updated successfully..!!", HttpStatus.OK);
		
	}
	
	//5. delete employee
	@DeleteMapping("/employees/delete/{id}")
	public ResponseEntity<String> deleteEmp(@PathVariable Integer id)
	{
		User emp = userService.findById(id);
		
		userService.deleteEmployee(emp);
		return new ResponseEntity<String>("Deleted successfully..!!", HttpStatus.OK);
		
	}
	
//	//6. get employee by id
//		@GetMapping("/allemployees/{email}")
//		public ResponseEntity<User> getEmpByEmail(@PathVariable String email)
//		{
//			User employee = userService.findByEmail(email);
//			return new ResponseEntity<User>(employee, HttpStatus.OK);
//		}

}
