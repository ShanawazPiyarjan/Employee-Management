package com.shanawaz.springboot.exceptionhandling;


public class EmpNotFound {
	
	String errorCode;
	String errorMessage;
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	@Override
	public String toString() {
		return "EmpNotFound [errorCode=" + errorCode + ", errorMessage=" + errorMessage + "]";
	}
	public EmpNotFound(String errorCode, String errorMessage) {
		super();
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
	
	

}
