package com.symbiosis.HomeDecor.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminLog {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int logid;
	private String emailid,password;
	public AdminLog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminLog(String emailid, String password) {
		super();
		this.emailid = emailid;
		this.password = password;
	}
	public int getLogid() {
		return logid;
	}
	public void setLogid(int logid) {
		this.logid = logid;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "AdminLog [logid=" + logid + ", emailid=" + emailid + ", password=" + password + "]";
	}

}
