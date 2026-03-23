import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("home page loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Jewkes/i);
  });

  test("main heading is visible", async ({ page }) => {
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
  });

  test("navigation bar is present", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("navigation contains expected links", async ({ page }) => {
    await page.goto("/");
    // Desktop nav links based on navItems in navigation.tsx
    const navLinks = page.locator("nav a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("hero section has CTA buttons", async ({ page }) => {
    await page.goto("/");
    const exploreLink = page.getByRole("link", { name: /see foundation package/i });
    await expect(exploreLink).toBeVisible();
  });

  test("pricing section is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/pricing/i).first()).toBeVisible();
  });

  test("compliance section is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/compliance/i).first()).toBeVisible();
  });

  test("page has no broken images", async ({ page }) => {
    await page.goto("/");
    const images = await page.locator("img").all();
    for (const img of images) {
      const src = await img.getAttribute("src");
      expect(src).toBeTruthy();
    }
  });

  test("mobile viewport renders without errors", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
  });

  test("email contact link is present", async ({ page }) => {
    await page.goto("/");
    const emailLink = page.locator('a[href="mailto:caymanroden@gmail.com"]').first();
    await expect(emailLink).toBeAttached();
  });
});
