import { Component } from "react";
declare class FormItem extends Component<any> {
    componentDidMount(): void;
    onChange: (val: any) => void;
    isControlType(type: any): boolean;
    render(): JSX.Element;
}
export default FormItem;
