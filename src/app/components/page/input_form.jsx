import React, { useState } from "react";
import Select from "../common/forms/select";
import { caseCode } from "../common/mocData/caseCode";
import { tolerance } from "../common/mocData/tolerance";
import { dielectric } from "../common/mocData/dielectric";
import { voltage } from "../common/mocData/voltage";
import { capacitance } from "../common/mocData/capacitance";
import Result from "./result";


const InputForm = () => {
    const [inputData, setInputData] = useState({
        caseCode: "",
        tolerance: "",
        dielectric: "",
        voltage: "",
        capacitance: ""
    });

    const [outputData, setOutputData] = useState("");

    // useEffect(() => {
    //     console.log("Your partnumber", outputData);
    // }, [outputData]);

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setOutputData((prevState) => {
            return prevState = `CC${inputData.caseCode}${inputData.tolerance}R${inputData.dielectric}${inputData.voltage}BB${inputData.capacitance}`
        });
        // console.log("Your partnumber", outputData);
    }
    return (
        <div className="row">
            <form className="mt-10 col-12" onSubmit = {onSubmit}>
                <div className="row align-items-start">
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
                    <button type="submit" className="btn btn-primary col-2">Сформировать</button>
                </div>
            </form>
            {outputData && <Result partnumber={outputData}/>}
        </div>
    );
};

export default InputForm;
