package com.shanawaz.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;
	private String address;
	private String mobile;
	private String password;
	private String dob;
	private String gender;

	@Override
	public String toString() {
		return "User [name=" + name + ", email=" + email + ", address=" + address + ", mobile=" + mobile + ", password="
				+ password + ", dob=" + dob + ", gender=" + gender + "]";
	}

	public User() {

	}

	public User(String name, String email, String address, String mobile, String password, String dob, String gender) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
		this.mobile = mobile;
		this.password = password;
		this.dob = dob;
		this.gender = gender;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getDob()
	{
		return dob;
	}
	
	public void setDob(String dob)
	{
		this.dob = dob;
	}
	public String getGender()
	{
		return gender;
	}
	public void setGender(String gender)
	{
		this.gender = gender;
	}

}
