import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/GDSC UP Diliman/);
  });

  test("has About Us button", async ({ page }) => {
    await page.getByRole("link", { name: "About us" }).click();
    await expect(page).toHaveURL(/.*about/);
  });
});
