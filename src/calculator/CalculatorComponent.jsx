import { useState } from "react";
import "./Calculator.css";
export const CalculatorComponent = () => {
    const [display, setDisplay] = useState("0");
    const [lastOperation, setLastOperation] = useState("");
    const [result, setResult] = useState("");

    const add = (val) => {
        setDisplay(display == "0" ? val : display + val);
        setResult(result == "0" ? val : result + val);
        setLastOperation(lastOperation == "0" ? val : lastOperation + val);
    };

    const addOperator = (val) => {
        setLastOperation(lastOperation == "0" ? val : lastOperation + val);
        setDisplay("");
        setResult(result == "0" ? val : result + val);
    };

    const remove = () => {
        setDisplay("0");
        setLastOperation("");
        setResult("0");
    };

    const calc = () => {
        const resultado = eval(result);
        setLastOperation(lastOperation + "=");
        setLastOperation(resultado);
        setDisplay(resultado);
    };
    const removeElement = () => {
        const newDisplay = display.slice(0, -1);
        setDisplay(newDisplay || "0");
        setResult(result.slice(0, -1));
        setLastOperation(lastOperation.slice(0, -1));
    };

    return (
        <>
            <div className="calculator-container">
                <h1>Calculator</h1>
                <p id="last-operation">{lastOperation}</p>
                <p id="display" className="display">
                    {display}
                </p>
                <table id="calculator">
                    <tr>
                        <td>
                            <button onClick={remove}>C</button>
                        </td>
                        <td>
                            <button onClick={removeElement}>CE</button>
                        </td>
                        <td>
                            <button onClick={removeElement}>
                                <i className="fa-solid fa-delete-left"></i>
                            </button>
                        </td>
                        <td>
                            <button
                                className="operator"
                                onClick={() => addOperator("/")}
                            >
                                <i className="fa-solid fa-divide"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => add("7")}>7</button>
                        </td>
                        <td>
                            <button onClick={() => add("8")}>8</button>
                        </td>
                        <td>
                            <button onClick={() => add("9")}>9</button>
                        </td>
                        <td>
                            <button
                                className="operator"
                                onClick={() => addOperator("+")}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => add("4")}>4</button>
                        </td>
                        <td>
                            <button onClick={() => add("5")}>5</button>
                        </td>
                        <td>
                            <button onClick={() => add("6")}>6</button>
                        </td>
                        <td>
                            <button
                                className="operator"
                                onClick={() => addOperator("-")}
                            >
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => add("1")}>1</button>
                        </td>
                        <td>
                            <button onClick={() => add("2")}>2</button>
                        </td>
                        <td>
                            <button onClick={() => add("3")}>3</button>
                        </td>
                        <td>
                            <button
                                className="operator"
                                onClick={() => addOperator("*")}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button></button>
                        </td>
                        <td>
                            <button onClick={() => add("0")}>0</button>
                        </td>
                        <td>
                            <button onClick={() => add(".")}>.</button>
                        </td>
                        <td>
                            <button className="operator" onClick={calc}>
                                <i className="fa-solid fa-equals"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <footer className="attribution">
                <a
                    href="https://github.com/NickGV"
                    target="_blank"
                    rel="noreferrer"
                >
                    by NickGV
                </a>
            </footer>
        </>
    );
};
