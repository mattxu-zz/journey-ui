import React, { Component } from "react";
import FormItem from "./FormItem";
import { FormContext } from './context';
import { FormRule } from "./definition";

class Form extends Component<any> {
    static Item: typeof FormItem;
    static create(WrappedComponent) {
        return class extends React.Component {
            state = {
                fieldErrors: {},
                values: {},
                rules: new Map<string, FormRule[]>(),
                controlErrors: {}
            }

            form = {
                values: this.state.values,
                getFieldErrors: () => { return this.state.fieldErrors },
                setFieldError: this.setFieldError.bind(this),
                validateFields: this.validateFields.bind(this),
                validateAllFields: this.validateAllFields.bind(this)
            }

            handleSetValue(id: string, value: any) {
                this.setState({
                    values: {
                        ...this.state.values,
                        [id]: value
                    }
                }, () => {
                    if (value === undefined) return;
                    this.validateFields([id]);
                })
            }

            handleAddRules(id: string, rules: FormRule[]) {
                this.setState({
                    rules: this.state.rules.set(id, rules)
                });
            }

            validateFields(ids: string[]): boolean {
                const { controlErrors, fieldErrors, values } = this.state;
                let result = true;
                ids.forEach(id => {
                    const ruleMismatch = this.validateRules(id, values[id]);
                    if (ruleMismatch) {
                        result = false;
                        controlErrors[id] = ruleMismatch.message;
                        fieldErrors[id] = true;
                    } else {
                        controlErrors[id] = undefined;
                        fieldErrors[id] = false;
                    }
                });

                this.setState({
                    controlErrors,
                    fieldErrors
                })

                return result;
            }

            setFieldError(id: string, message: string) {
                this.setState({
                    controlErrors: {
                        ...this.state.controlErrors,
                        [id]: message
                    }
                })
            }

            validateAllFields(callback: Function) {
                const valid = this.validateFields(Object.keys(this.state.values));
                callback(valid, this.state.values);
            }

            validateRules(id: string, value: any) {
                const rules = this.state.rules.get(id);
                if (!rules) {
                    return;
                }
                const ruleMismatch = rules.find(rule => !this.validate(rule, value));
                return ruleMismatch;
            }

            validate(rule, value: string) {
                if (rule.required) {
                    return value && true;
                }

                const { type } = rule;
                switch (type) {
                    case 'phoneNumber': return this.validatePhoneNumber(value);
                    default: console.error(`rule type ${type} not defined`); return true;
                }
            }

            validatePhoneNumber(value) {
                const phoneNumberRegex = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                return phoneNumberRegex.test(value);
            }

            render() {
                return (
                    <FormContext.Provider value={{
                        setValue: this.handleSetValue.bind(this),
                        addRules: this.handleAddRules.bind(this),
                        controlErrors: this.state.controlErrors
                    }}>
                        <WrappedComponent form={this.form} />
                    </FormContext.Provider>
                )
            }
        }
    }

    render() {
        const { onSubmit } = this.props;
        const { controlErrors } = this.context;
        const children = this.props.children;
        return (
            <form onSubmit={onSubmit}>
                {React.Children.map(children, (child: any) => {
                    if (!child) {
                        return null;
                    }
                    if (child.type === FormItem) {
                        return React.cloneElement(child, {
                            hasError: controlErrors[child.props.id] !== undefined,
                            errorMsg: controlErrors[child.props.id]
                        });
                    } else {
                        return child;
                    }
                })}
            </form>
        )
    }
}

Form.contextType = FormContext;
export default Form;