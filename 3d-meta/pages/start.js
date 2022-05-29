import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Flex,
    Box, 
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Button, 
    Textarea,
    Input, 
    Text,

} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Formik, Form, useField, useFormikContext } from 'formik'
import * as Yup from 'yup'
import Layout from '../components/secondaryLayout'

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props)
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    )
  }

  // Styled components ....
const StyledSelect = styled.select`
color: blue;
`

const StyledErrorMessage = styled.div`
font-size: 12px;
color: red;
width: 400px;
margin-top: 0.25rem;
&:before {
  content: "❌ ";
  font-size: 10px;
}
`

const StyledLabel = styled.label`
margin-top: 1rem;
`

const MySelect = ({ label, ...props }) => {
// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input> and alse replace ErrorMessage entirely.
const [field, meta] = useField(props)
return (
  <>
    <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
    <StyledSelect {...field} {...props} />
    {meta.touched && meta.error ? (
      <StyledErrorMessage>{meta.error}</StyledErrorMessage>
    ) : null}
  </>
)
}


// And now we can use these
const SignupForm = () => {
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            budget: "" // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            jobType: Yup.string()
              // specify the set of valid values for job type
              // @see http://bit.ly/yup-mixed-oneOf
              .oneOf(
                ["10+", "20+", "30+", "40+"],
                "Invalid Budget Amount"
              )
              .required("Required")
          })}
          onSubmit={values => {
               console.log(values)
               setSubmitting(false);
                }}
        >
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
            <MySelect label="Budget" name="budget">
              <option value="">Select a budget</option>
              <option value="11+">$11,000 - $20,000</option>
              <option value="21+">$21,000 - $30,000</option>
              <option value="31+">$31,000 - $40,000</option>
              <option value="41+">$41,000 +</option>
            </MySelect>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    )
  }



const StartProject = () => {

    return (
        <Layout title='Start A Project'>
            <Flex align='center' justify='center' flexDir='column'>
                <SignupForm />
            </Flex>
        </Layout>
    )
}

export default StartProject