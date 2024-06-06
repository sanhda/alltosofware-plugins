package com.alltosoftware.service;

import com.alltosoftware.dto.RegistrationDto;
import org.springframework.stereotype.Service;

public interface UserService {

    public void saveUser(RegistrationDto registrationDto);
}
