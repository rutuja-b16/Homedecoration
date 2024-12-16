package com.symbiosis.HomeDecor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.symbiosis.HomeDecor.Model.AdminLog;
import com.symbiosis.HomeDecor.service.AdminLogService;

public class AdminLogController {
	
		@Autowired
		private AdminLogService ls;
		@GetMapping ("/AdminLog")
		public List<AdminLog> handleget()
		{
			return ls.getAll();
		}
		@PostMapping("/addlog")
		public AdminLog add(@RequestBody AdminLog l)
		{
			return ls.insertrecord(l);
		}
		@DeleteMapping("/dellog/{lid}")
		public void delr(@PathVariable("lid")int l)
		{
			ls.del(l);
		}
		@PutMapping("/uplog/{lid}")
	    public AdminLog update(@PathVariable("lid")int i,@RequestBody AdminLog l)
	    {
			return ls.updaterecord(i,l);
	    }
	}


