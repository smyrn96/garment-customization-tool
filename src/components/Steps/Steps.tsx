import React from "react";
import "./Steps.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export interface StepProps {
  label: string;
}

const array = [1, 2, 3];

const Steps = (props: StepProps) => {
  return (
    <div>
      <h3>{props.label}</h3>
      <div className="d-flex ">
        {array.map((step,index) => (
          <div className="d-flex">
            <div className={`circle d-flex ${index==0 && "active"}`}>
              <div className="circle_text align-self-center">{step}</div>
            </div>
            {index <2 && <div className="hr align-self-center"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
