$(document).ready(function() {
    // Form validation using jQuery
    const $form = $('#registrationForm');
    const $submitBtn = $('#submitBtn');

    // Real-time validation on input
    $form.find('input, select, textarea').on('blur', function() {
        validateField($(this));
    });

    // Phone number validation
    $('#phone, #emergencyPhone').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        $(this).val(value);
    });

    // Email validation
    $('#email').on('blur', function() {
        validateEmail($(this));
    });

    // Student ID validation (alphanumeric)
    $('#studentId').on('input', function() {
        let value = $(this).val().replace(/[^a-zA-Z0-9]/g, '');
        $(this).val(value);
    });

    // Date of birth validation (must be in the past)
    $('#dateOfBirth').on('change', function() {
        validateDateOfBirth($(this));
    });

    // Form submission handler
    $form.on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate all fields
        $form.find('input[required], select[required], textarea[required]').each(function() {
            if (!validateField($(this))) {
                isValid = false;
            }
        });

        // Special validations
        if (!validateEmail($('#email'))) {
            isValid = false;
        }

        if (!validateDateOfBirth($('#dateOfBirth'))) {
            isValid = false;
        }

        if (!validatePhone($('#phone'))) {
            isValid = false;
        }

        if (!validatePhone($('#emergencyPhone'))) {
            isValid = false;
        }

        if (!validateTerms()) {
            isValid = false;
        }

        if (isValid) {
            // Show loading state
            $submitBtn.prop('disabled', true).text('Submitting...');
            
            // Submit the form
            this.submit();
        } else {
            // Scroll to first error
            const $firstError = $form.find('.error').first();
            if ($firstError.length) {
                $('html, body').animate({
                    scrollTop: $firstError.offset().top - 100
                }, 500);
            }
            
            showNotification('Please correct the errors in the form', 'error');
        }
    });

    // Reset form handler
    $form.on('reset', function() {
        $form.find('.error-message').text('');
        $form.find('input, select, textarea').removeClass('error success');
        $submitBtn.prop('disabled', false).text('Submit Registration');
    });

    // Validation functions
    function validateField($field) {
        const value = $field.val().trim();
        const $errorMsg = $field.siblings('.error-message');
        const fieldName = $field.attr('name');
        let isValid = true;
        let errorMessage = '';

        // Check if required field is empty
        if ($field.prop('required') && value === '') {
            errorMessage = getFieldLabel($field) + ' is required';
            isValid = false;
        } else if (value !== '') {
            // Field-specific validations
            switch(fieldName) {
                case 'email':
                    isValid = validateEmail($field);
                    break;
                case 'phone':
                case 'emergencyPhone':
                    isValid = validatePhone($field);
                    break;
                case 'dateOfBirth':
                    isValid = validateDateOfBirth($field);
                    break;
                case 'zipCode':
                    isValid = validateZipCode($field);
                    break;
                default:
                    isValid = true;
            }
        }

        // Update UI
        if (isValid) {
            $field.removeClass('error').addClass('success');
            $errorMsg.text('');
        } else {
            $field.removeClass('success').addClass('error');
            $errorMsg.text(errorMessage || 'Invalid input');
        }

        return isValid;
    }

    function validateEmail($field) {
        const email = $field.val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const $errorMsg = $field.siblings('.error-message');
        
        if (email === '') {
            $errorMsg.text('Email is required');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            $errorMsg.text('Please enter a valid email address');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        $errorMsg.text('');
        $field.removeClass('error').addClass('success');
        return true;
    }

    function validatePhone($field) {
        const phone = $field.val().trim().replace(/\D/g, '');
        const $errorMsg = $field.siblings('.error-message');
        const fieldName = $field.attr('name');
        
        if (phone === '') {
            $errorMsg.text(getFieldLabel($field) + ' is required');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        if (phone.length < 10) {
            $errorMsg.text('Phone number must be at least 10 digits');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        $errorMsg.text('');
        $field.removeClass('error').addClass('success');
        return true;
    }

    function validateDateOfBirth($field) {
        const dob = $field.val();
        const $errorMsg = $field.siblings('.error-message');
        
        if (dob === '') {
            $errorMsg.text('Date of birth is required');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (birthDate > today || (age === 0 && monthDiff < 0) || (age === 1 && monthDiff < 0)) {
            $errorMsg.text('Date of birth cannot be in the future');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        if (age < 13) {
            $errorMsg.text('You must be at least 13 years old to register');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        $errorMsg.text('');
        $field.removeClass('error').addClass('success');
        return true;
    }

    function validateZipCode($field) {
        const zipCode = $field.val().trim();
        const $errorMsg = $field.siblings('.error-message');
        const zipRegex = /^[A-Z0-9\s-]{3,10}$/i;
        
        if (zipCode === '') {
            $errorMsg.text('Zip/Postal code is required');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        if (!zipRegex.test(zipCode)) {
            $errorMsg.text('Please enter a valid zip/postal code');
            $field.removeClass('success').addClass('error');
            return false;
        }
        
        $errorMsg.text('');
        $field.removeClass('error').addClass('success');
        return true;
    }

    function validateTerms() {
        const $terms = $('#terms');
        const $errorMsg = $terms.closest('.form-group').find('.error-message');
        
        if (!$terms.is(':checked')) {
            $errorMsg.text('You must agree to the terms and conditions');
            return false;
        }
        
        $errorMsg.text('');
        return true;
    }

    function getFieldLabel($field) {
        const $label = $field.siblings('label').first();
        if ($label.length) {
            return $label.text().replace('*', '').trim();
        }
        return $field.attr('name') || 'This field';
    }

    function showNotification(message, type) {
        // Create notification element
        const $notification = $('<div>')
            .addClass('notification ' + type)
            .text(message)
            .css({
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '15px 20px',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                zIndex: '10000',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                animation: 'slideInRight 0.3s ease-out'
            });

        if (type === 'error') {
            $notification.css('background', '#e74c3c');
        } else {
            $notification.css('background', '#27ae60');
        }

        $('body').append($notification);

        // Remove after 3 seconds
        setTimeout(function() {
            $notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }

    // Add CSS animation
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `)
        .appendTo('head');
});


