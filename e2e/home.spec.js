// @ts-check

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/GDSC UP Diliman/);
});

test("get started link", async ({ page }) => {
  await page.getByRole("link", { name: "About Us" }).click();
  await expect(page).toHaveURL(/.*about/);
});
