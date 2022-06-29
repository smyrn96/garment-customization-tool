import React from "react";
import { render } from "@testing-library/react";

import Steps from "./Steps";

describe("Steps", () => {
  test("renders the Steps component", () => {
    render(<Steps label="Hello world!" />);
  });
});