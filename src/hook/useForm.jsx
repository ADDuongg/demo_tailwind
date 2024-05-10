import { useState } from 'react';

const useForm = (initialValues, callback) => {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            callback(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = (data) => {
        let errors = {};
        if (!data.firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        if (!data.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!data.inquiry.trim()) {
            errors.inquiry = 'Inquiry is required';
        }
        return errors;
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        errors
    };
};

export default useForm;
