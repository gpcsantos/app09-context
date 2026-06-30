import { useState } from "react";
import { TestContext } from "./TestContext";

export function TestProvider({ children }) {
  const [test, setTest] = useState(true);

  const changeTest = () => {
    setTest(test ? false : true);
  };

  return (
    <TestContext.Provider value={{ test, changeTest }}>
      {children}
    </TestContext.Provider>
  );
}
