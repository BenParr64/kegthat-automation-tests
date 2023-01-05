import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://kegthat-headless.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Still Spirits Classic Flavours Archives/);
});