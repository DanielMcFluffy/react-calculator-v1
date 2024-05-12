import { useEffect, useState } from "react";
import "./Body.css";
import Button from "./Button";

const Body = () => {
  //use .join to to display number clicked
  const [display, setDisplay] = useState<(number | string)[]>([0]);

  useEffect(() => {
    console.log(...display);
  }, [display]);

  // logic for putting clicked numbers onto the display screen
  const handleClickButton = (command: number | string) => {
    // clear the 0 from the display
    if (display[0] === 0) {
      setDisplay([...display.splice(0, 1)]);
    }
    console.log(...display);
    // insert the numbers pressed
    setDisplay([...display, command]);
  };

  //ui logic to not spam symbols on display
  const shouldDisableButton = () => {
    const lastChar = display[display.length - 1];
    return (
      display[0] === 0 ||
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "."
    );
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5">
          <div className="card-body border border-secondary rounded">
            <div className="row">
              <div className="col-12 mb-5 border lead text-end text-white bg-secondary py-3">
                {...display}
              </div>

              <div className="col-3">
                <Button
                  symbol={"AC"}
                  onClick={() => setDisplay([0])}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"±"}
                  onClick={() => {
                    const expression = display.join("");
                    try {
                      const result = new Function(`return (${expression}) `)(); //if the returned value is negative, make it  positive, else make it negative
                      setDisplay([-result]);
                    } catch (error) {
                      setDisplay(["INVALID USAGE"]);
                      setTimeout(() => {
                        setDisplay([0]);
                      }, 500);
                    }
                  }}
                  className={"btn btn-secondary"}
                  disabled={
                    display[0] === 0 || display[display.length - 1] === "±"
                  }
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"%"}
                  onClick={() => {
                    const expression = display.join("");
                    const result = new Function(`return (${expression})/100`)(); //not using eval() due to security risk
                    setDisplay([result]);
                  }}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"/"}
                  onClick={() => handleClickButton("/")}
                  className={"btn btn-secondary"}
                  disabled={shouldDisableButton()}
                />
              </div>

              <div className="col-3">
                <Button
                  symbol={7}
                  onClick={() => handleClickButton(7)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={8}
                  onClick={() => handleClickButton(8)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={9}
                  onClick={() => handleClickButton(9)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"*"}
                  onClick={() => handleClickButton("*")}
                  className={"btn btn-secondary"}
                  disabled={shouldDisableButton()}
                />
              </div>

              <div className="col-3">
                <Button
                  symbol={4}
                  onClick={() => handleClickButton(4)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={5}
                  onClick={() => handleClickButton(5)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={6}
                  onClick={() => handleClickButton(6)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"-"}
                  onClick={() => handleClickButton("-")}
                  className={"btn btn-secondary"}
                  disabled={shouldDisableButton()}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={1}
                  onClick={() => handleClickButton(1)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={2}
                  onClick={() => handleClickButton(2)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={3}
                  onClick={() => handleClickButton(3)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"+"}
                  onClick={() => handleClickButton("+")}
                  className={"btn btn-secondary"}
                  disabled={shouldDisableButton()}
                />
              </div>

              <div className="col-6">
                <Button
                  symbol={0}
                  onClick={() => handleClickButton(0)}
                  className={"btn btn-secondary"}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"."}
                  onClick={() => handleClickButton(".")}
                  className={"btn btn-secondary"}
                  disabled={display.includes(".")}
                />
              </div>
              <div className="col-3">
                <Button
                  symbol={"="}
                  onClick={() => {
                    const expression = display.join("");
                    const result = new Function(`return (${expression})`)(); //not using eval() due to security risk
                    setDisplay([result]);
                  }}
                  className={"btn btn-secondary"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
