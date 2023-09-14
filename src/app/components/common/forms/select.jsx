import React from 'react';

const Select = ({ label, name, value, defaultOption, onChange, options }) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
        console.log("name: ", target.name, "value: ", target.value);
        console.log("options: ", options);
    };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    return (
        <div className='col-2 text-center'>
            <label
                htmlFor={name}
                className="text-secondary text-center"
            >{label}</label>
            <select
                className="select"
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
                        <option  key={option.name} value={option.name}>
                            {option.value}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Select;
