import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Form, Input} from "antd";

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 14,
            offset: 6
        }
    }
};

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? 'error' : 'success'}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component {...input} {...rest} children={children} />
        </FormItem>
    );
};

const AInput = makeField(Input);

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                label="Email"
                name="email"
                component={AInput}
                type="email"
                placeholder="Email"
            />
            <Field
                label="Password"
                name="password"
                component={AInput}
                type="password"
                placeholder="Password"
            />
            <FormItem {...tailFormItemLayout}>
                <Button
                    type="primary"
                    disabled={pristine || submitting}
                    htmlType="submit"
                    style={{ marginRight: "10px" }}
                >
                    Submit
                </Button>
            </FormItem>
        </Form>
    );
};

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required Email'
    }
    if (!values.password) {
        errors.password = 'Required Password'
    }
    return errors;
}

export default reduxForm({
    form: "simple", // a unique identifier for this form
    validate,
})(SimpleForm);
