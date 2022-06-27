import React from "react";

export interface StepProps {
  label: string;
}

const Steps = (props: StepProps) => {
  return <button>{props.label}</button>;
};

export default Steps;