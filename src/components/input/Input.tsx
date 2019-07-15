import React, { Component } from 'react';
export class Input extends Component<any> {
    constructor(props) {
		super(props);
	}
    render() {
        const { id, type, placeholder, suffix, onChange } = this.props;
        return (
            <div className="journey-input">
                <input id={id} type={type ? type : 'text'} placeholder={placeholder} className="journey-input-control" onChange={ e => {
                    onChange && onChange(e.target.value);
                } }/>
                { suffix && <div className="journey-input-suffix">{suffix}</div> }
            </div>
        )
    }
}
