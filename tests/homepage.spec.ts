import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Still Spirits Classic Flavours Archives/);
});

test("has info bar with dismiss button", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  // Check if the container div element exists and contains the dismiss button
  const container = page.getByText("Free postage over £75*");
  const dismissButton = page.getByRole("button", { name: "DISMISS" });
  expect(container).toBeTruthy();
  expect(dismissButton).toBeTruthy();
});

test("has logo with alt text", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  // Check if the logo element exists and has the correct alt text
  const logo = page.getByRole("img", { name: "kegthat logo" });
  expect(logo).toBeTruthy();
});
