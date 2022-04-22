import React, { Component } from "react";
import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';
import { addNewClient } from './client';

const inputBottomMargin = {marginBottom: '10px'};
const tagStyle = {backgroundColor: '#f50', color: 'white', ...inputBottomMargin};

class AddClientForm extends Component {




    render (){
        return (
          
            <Formik
            initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
            validate={values => {
                const errors = {};

                if(!values.firstName){
                    errors.firstName = 'First Name Required'
                }

                if(!values.lastName){
                    errors.lastName = 'Last Name Required'
                }
                
                
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if(!values.gender){
                    errors.gender = 'Gender Required'
                } else if (!['MALE', 'male', 'FEMALE', 'female'].includes(values.gender)){
                    errors.gender = 'Gender must be (MALE, male, FEMALE, female)'
                }

                return errors;
            }}
            onSubmit={(client, { setSubmitting }) => {
                addNewClient(client).then(() => {
                    alert(JSON.stringify(client));
                    setSubmitting(false);
                    
                })
                
               
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                submitForm,
                isValid
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                            <Input
                                style={inputBottomMargin}
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                placeholder='First name'
                            />
                            {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
                            <Input
                                style={inputBottomMargin}
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                placeholder='Last name'
                            />
                            {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
                            <Input
                                style={inputBottomMargin}
                                name="email"
                                type='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder='Email'
                            />
                            {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                            <Input 
                                style={inputBottomMargin}
                                name="gender"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                                placeholder='Gender. E.g Male or Female'
                            />
                            {errors.gender && touched.gender && <Tag style={tagStyle}>{errors.gender}</Tag>}
                            <Button onClick={() => submitForm()} type="submit" disabled={isSubmitting | (touched && !isValid)} >
                                Submit
                            </Button>
                </form>
            )}
            </Formik>
      
        );
    }


}

export default AddClientForm;