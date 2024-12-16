package com.symbiosis.HomeDecor.service;

import java.util.List;

import com.symbiosis.HomeDecor.Model.AdminLog;
import com.symbiosis.HomeDecor.Model.Registration;

public interface AdminLogService {
	AdminLog insertrecord (AdminLog l);
	List<AdminLog> getAll();
	void del(int ri);
	AdminLog updaterecord(int i,AdminLog l);
}
