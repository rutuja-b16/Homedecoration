package com.symbiosis.HomeDecor.service;

import java.util.List;

import com.symbiosis.HomeDecor.Model.Feedback;

public interface FeedbackService {
	Feedback insertrecord (Feedback r);
	List<Feedback> getAll();
	void del(int ri);
	Feedback updaterecord(int i,Feedback r);
}
