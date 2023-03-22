import { beforeEach, expect, test, vitest } from "vitest";
import { render } from "@testing-library/react";
import Home from "../pages";

beforeEach(() => {
  const mockIntersectionObserver = vitest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("home", () => {
  const { getByText } = render(<Home eventsArray={[]} />);
  expect(getByText("Grow. Learn. Connect.")).toBeDefined;
});
