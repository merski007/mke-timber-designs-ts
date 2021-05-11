import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import "./styles.css";

// Abstraction code from tutorial. Don't fully understand how it is working, but looks handy
//TODO: mjm, learn this code...

// const MyTextInput = ({ label, ...props }) => {
//     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//     // which we can spread on <input>. We can use field meta to show an error
//     // message if the field is invalid and it has been touched (i.e. visited)
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

// const MyCheckbox = ({ children, ...props }) => {
//     // React treats radios and checkbox inputs differently other input types, select, and textarea.
//     // Formik does this too! When you specify `type` to useField(), it will
//     // return the correct bag of props for you -- a `checked` prop will be included
//     // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <label className="checkbox-input">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };

// const MySelect = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <select {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };


const OrderForm = () => {
    return (
        <Formik
            initialValues={{ email: '', firstName: '', lastName: '', phone: '', product: '', contactMethod: '', comments: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                firstName: Yup.string()
                    .required('Required'),
                lastName: Yup.string()
                    .required('Required'),
                phone: Yup.string()
                    .required('Required'),
                product: Yup.mixed()
                    .notOneOf(['Please select an item'])
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="product">Select Product</label>
                    <Field name="product" as="select">
                        <option value="Please select an item">Please select an item</option>
                        <option value="piklerTriangle">Pikler Triangle</option>
                        <option value="largeArch">Large Arch</option>
                    </Field>
                    <ErrorMessage name="product" />

                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="phone">Phone Number</label>
                    <Field name="phone" type="text" />
                    <ErrorMessage name="text" />

                    <label htmlFor="comments">Additional Comments</label>
                    <Field name="comments" as="textarea" />
                    <ErrorMessage name="text" />

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    )
}

export default OrderForm
