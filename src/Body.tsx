import { useState } from "react";
import "./Body.css";
import { add, clear, divide, minus, multiply } from "./CalculatorLogic";

const Body = () => {
  const [total, setTotal] = useState(0);
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);

  // trackFirstNumber = (event:Event) => {
  //   setFirstNumber();
  // }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5">
          <div className="card-body border border-secondary rounded">
            <div className="row">
              <div className="col-12 mb-5 border lead text-end text-white bg-secondary py-3">
                {total}
              </div>

              <div className="col-3">
                <button className="btn btn-secondary">AC</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">&#xb1;</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">%</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">/</button>
              </div>

              <div className="col-3">
                <button className="btn btn-secondary">7</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">8</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">9</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">*</button>
              </div>

              <div className="col-3">
                <button className="btn btn-secondary">4</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">5</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">6</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">-</button>
              </div>

              <div className="col-3">
                <button className="btn btn-secondary">1</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">2</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">3</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">+</button>
              </div>

              <div className="col-6">
                <button className="btn btn-secondary">0</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">.</button>
              </div>
              <div className="col-3">
                <button className="btn btn-secondary">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
