package com.symbiosis.HomeDecor.service;

import java.util.List;

import com.symbiosis.HomeDecor.Model.Registration;

public interface RegistrationService {
Registration insertrecord (Registration r);
List<Registration> getAll();
void del(int ri);
Registration updaterecord(int i,Registration r);
}
