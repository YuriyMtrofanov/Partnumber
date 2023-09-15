import React from "react";

const Select = ({ label, name, value, defaultOption, onChange, options }) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    return (
        <div className="col-lg-2 col-sm-6">
            <label
                htmlFor={name}
                className="text-secondary text-center"
            >{label}</label>
            <select
                className="select border bg-light"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length > 0 &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Select;
