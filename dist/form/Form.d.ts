import React, { Component } from "react";
import FormItem from "./FormItem";
import { FormRule } from "./definition";
declare class Form extends Component<any> {
    static Item: typeof FormItem;
    static create(WrappedComponent: any): {
        new (props: Readonly<{}>): {
            state: {
                fieldErrors: {};
                values: {};
                rules: Map<string, FormRule[]>;
                controlErrors: {};
            };
            form: {
                values: {};
                getFieldErrors: () => {};
                setFieldError: any;
                validateFields: any;
                validateAllFields: any;
            };
            handleSetValue(id: string, value: any): void;
            handleAddRules(id: string, rules: FormRule[]): void;
            validateFields(ids: string[]): boolean;
            setFieldError(id: string, message: string): void;
            validateAllFields(callback: Function): void;
            validateRules(id: string, value: any): FormRule | undefined;
            validate(rule: any, value: string): boolean | "";
            validatePhoneNumber(value: any): boolean;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        new (props: {}, context?: any): {
            state: {
                fieldErrors: {};
                values: {};
                rules: Map<string, FormRule[]>;
                controlErrors: {};
            };
            form: {
                values: {};
                getFieldErrors: () => {};
                setFieldError: any;
                validateFields: any;
                validateAllFields: any;
            };
            handleSetValue(id: string, value: any): void;
            handleAddRules(id: string, rules: FormRule[]): void;
            validateFields(ids: string[]): boolean;
            setFieldError(id: string, message: string): void;
            validateAllFields(callback: Function): void;
            validateRules(id: string, value: any): FormRule | undefined;
            validate(rule: any, value: string): boolean | "";
            validatePhoneNumber(value: any): boolean;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        contextType?: React.Context<any> | undefined;
    };
    render(): JSX.Element;
}
export default Form;
