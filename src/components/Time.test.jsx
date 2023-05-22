import { describe, it, expect, test, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Time from "./Time";
import React from "react";

describe("Time is rendered!"),
  () => {
    beforeEach(() => {
      render(<Time />);
    });

    test("Last updated is rendered", () => {
      const content = screen.getBytestId("last");

      expect(content).toHaveTextContent("Last Updated"); // Should just check if
      //- Last Updated renders
    });

    test("Local Time is rendered", () => {
      const content = screen.getBytestId("local");

      expect(content).toHaveTextContent("Last Updated"); // Should just check if
      //- Last Updated renders
    });

    test();
  };
