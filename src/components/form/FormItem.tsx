import React, { Component } from "react";
import { Input } from "../input/Input";
import { CheckBox } from "../checkBox/CheckBox";
import { FormContext } from './context';
import { FormRule } from "./definition";
class FormItem extends Component<any> {
    componentDidMount() {
        const { addRules } = this.context;
        const { id, rules }: {id: string, rules: FormRule[]} = this.props as any;
        addRules(id, rules);
    }

    onChange = (val) => {
        const { setValue } = this.context;
        const { id } = this.props;
        setValue(id, val);
    }

    isControlType(type) {
        return type === Input || type === CheckBox
    }

    render() {
        const { id, style, hasError, errorMsg } = this.props;
        const children = this.props.children;
        return (
            <div className="journey-form-control" style={style}>
                {React.Children.map(children, (child: any) => {
                    if (!child) {
                        return null;
                    }
                    if (this.isControlType(child.type)) {
                        return React.cloneElement(child, {
                            id,
                            onChange: this.onChange.bind(this)
                        });
                    } else {
                        return child;
                    }
                })}
                {hasError && <div className="journey-form-control-feedback">{`*${errorMsg}`}</div>}
            </div>
        )
    }
}

FormItem.contextType = FormContext;

export default FormItem;