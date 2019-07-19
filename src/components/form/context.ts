import React from "react";

export const form = {
    setValue: () => {},
    addRules: () => {},
    controlErrors: {}
}

export const FormContext = React.createContext(
    form
);