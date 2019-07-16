import React, {Component} from "react";
export class CheckBox extends Component<any> {
    state = {
        checked: false
    }
    setChecked = (checked) => {
        this.setState({
            checked
        });
    }
    render() {
        const { id, label } = this.props;
        const { checked } = this.state;
        const { onChange } = this.props;
        return (
            <div>
                <span className={"journey-checkbox" + (checked ? ' ' + "journey-checkbox-checked" : '')}>
                    <input id={id} type="checkbox" onChange={ e => {
                        const val = e.target.checked;
                        this.setChecked(val);
                        onChange && onChange(val);
                    } }/>
                    <span className="journey-checkbox-inner"></span>
                </span>
                <span>{label}</span>
            </div>
            
        )
    }
}
