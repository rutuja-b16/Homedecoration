package com.symbiosis.HomeDecor.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.symbiosis.HomeDecor.Model.AdminLog;
import com.symbiosis.HomeDecor.Model.Registration;
import com.symbiosis.HomeDecor.repository.AdminLogRepository;
import com.symbiosis.HomeDecor.repository.RegistrationRepository;

@Service
public class AdminLogServiceImpl implements AdminLogService {

	@Autowired
	@Qualifier("logRepo")
	private AdminLogRepository logRepo;
	
	@Override
	public AdminLog insertrecord(AdminLog l) {
		// TODO Auto-generated method stub
		return logRepo.save(l);
	}

	@Override
	public List<AdminLog> getAll() {
		// TODO Auto-generated method stub
		return logRepo.findAll();
	}

	@Override
	public void del(int ri) {
		// TODO Auto-generated method stub
		logRepo.deleteById(ri);
	}

	@Override
	public AdminLog updaterecord(int i, AdminLog l) {
		// TODO Auto-generated method stub
		Optional<AdminLog> opt=logRepo.findById(i);
		if(opt.isPresent())
		{
			AdminLog rold=opt.get();
			rold.setEmailid(l.getEmailid());
			rold.setPassword(l.getPassword());
			 return logRepo.save(rold);
			
		}
		return null;
	}	 
}
