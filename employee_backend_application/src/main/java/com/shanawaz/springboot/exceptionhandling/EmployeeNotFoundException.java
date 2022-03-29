package com.shanawaz.springboot.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;



public class EmployeeNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmployeeNotFoundException(String string) {
		// TODO Auto-generated constructor stub
	}

	@ExceptionHandler(EmployeeNotFoundException.class)
	public ResponseEntity<String> handleEmployeeNotFoundException(EmployeeNotFoundException enfe)
	{
		return new ResponseEntity<String>("Specified Employee Id is not found..!", HttpStatus.BAD_REQUEST);
	}
}
