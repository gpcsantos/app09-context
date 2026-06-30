import { TestContext } from "../contexts/TestContext";
import { useContext } from "react";

export function useTest() {
  return useContext(TestContext);
}
