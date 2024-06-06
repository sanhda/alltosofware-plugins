package com.alltosoftware.validation.annotation;

import com.alltosoftware.dto.RegistrationDto;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, RegistrationDto> {
    @Override
    public boolean isValid(RegistrationDto registrationDto,
                           ConstraintValidatorContext context) {
        if (registrationDto.getPassword() == null || registrationDto.getConfirmPassword() == null) {
            return false;
        }

        boolean isValid = registrationDto.getPassword().equals(registrationDto.getConfirmPassword());

        if (!isValid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(context.getDefaultConstraintMessageTemplate())
                    .addPropertyNode("confirmPassword")
                    .addConstraintViolation();
        }

        return isValid;
    }
}
