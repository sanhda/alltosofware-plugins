package com.alltosoftware.controller;

import com.alltosoftware.dto.RegistrationDto;
import com.alltosoftware.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AuthController {
    private UserService userService;
    private AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("user") RegistrationDto user) {
        Authentication authenticationRequest =
                UsernamePasswordAuthenticationToken.unauthenticated(user.getUsername(), user.getPassword());
        Authentication authenticationResponse =
                this.authenticationManager.authenticate(authenticationRequest);
        SecurityContextHolder.getContext().setAuthentication(authenticationResponse);
        return "redirect:/account/home";
    }

    @GetMapping("/register")
    public ModelAndView register() {
        RegistrationDto user = new RegistrationDto();
        ModelAndView modelAndView = new ModelAndView("register");
        modelAndView.addObject("user", user);
        return modelAndView;
    }

    @PostMapping("/register")
    public ModelAndView saveUser(@Valid @ModelAttribute("user") RegistrationDto registrationDto,
                           BindingResult result) {
        ModelAndView modelAndView = new ModelAndView("register");

        if (result.hasErrors()) {
            modelAndView.addObject("user", registrationDto);
            return modelAndView;
        }

        userService.saveUser(registrationDto);
        return new ModelAndView("redirect:/");
    }
}
