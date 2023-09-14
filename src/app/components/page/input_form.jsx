import React, { useEffect, useState } from "react";
import Select from "../common/forms/select";
import { caseCode } from "../common/mocData/caseCode";
import { tolerance } from "../common/mocData/tolerance";
import { dielectric } from "../common/mocData/dielectric";
import { voltage } from "../common/mocData/voltage";
import { capacitance } from "../common/mocData/capacitance";


const InputForm = () => {
    const [inputData, setInputData] = useState({
        caseCode: "",
        tolerance: "",
        dielectric: "",
        voltage: "",
        capacitance: ""
    })

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        console.log("inputData: ", inputData);
    }, [inputData]);

    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form className="mt-10" onSubmit = {onSubmit}>
            <div className="row mt-10">
                <Select
                    name = "caseCode"
                    label = "Тип корпуса"
                    defaultOption="Выбрать из списка..."
                    value = {inputData.caseCode}
                    onChange={handleChange}
                    options={caseCode}
                />
                <Select
                    name = "tolerance"
                    label = "Отклонение"
                    defaultOption="Выбрать из списка..."
                    value = {inputData.tolerance}
                    onChange={handleChange}
                    options={tolerance}
                />
                <Select
                    name = "dielectric"
                    label = "Тип диэлектрика"
                    defaultOption="Выбрать из списка..."
                    value = {inputData.dielectric}
                    onChange={handleChange}
                    options={dielectric}
                />
                <Select
                    name = "voltage"
                    label = "Сопротивление"
                    defaultOption="Выбрать из списка..."
                    value = {inputData.voltage}
                    onChange={handleChange}
                    options={voltage}
                />
                <Select
                    name = "capacitance"
                    label = "Емкость"
                    defaultOption="Выбрать из списка..."
                    value = {inputData.capacitance}
                    onChange={handleChange}
                    options={capacitance}
                />
                <button type="submit" className="btn btn-primary col-2">Submit</button>
            </div>
        </form>
    );
};

export default InputForm;
