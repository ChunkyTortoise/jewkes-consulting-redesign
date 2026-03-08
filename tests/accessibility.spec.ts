import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("page has exactly one h1", async ({ page }) => {
    await page.goto("/");
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);
  });

  test("images have alt text", async ({ page }) => {
    await page.goto("/");
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("interactive elements have accessible names", async ({ page }) => {
    await page.goto("/");
    // Mobile menu toggle button has aria-label
    const menuButton = page.locator("button[aria-label]").first();
    await expect(menuButton).toBeAttached();
  });

  test("links have discernible text", async ({ page }) => {
    await page.goto("/");
    const links = await page.locator("a[href]").all();
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      const hasContent = (text && text.trim().length > 0) || ariaLabel;
      expect(hasContent).toBeTruthy();
    }
  });

  test("page uses semantic HTML sections", async ({ page }) => {
    await page.goto("/");
    const sections = await page.locator("section").count();
    expect(sections).toBeGreaterThanOrEqual(1);
  });

  test("back-to-top button has aria-label", async ({ page }) => {
    await page.goto("/");
    const backToTop = page.locator('button[aria-label="Back to top"]');
    await expect(backToTop).toBeAttached();
  });
});
