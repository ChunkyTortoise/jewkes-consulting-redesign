import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('home page loads with no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/Jewkes/);
    expect(errors).toHaveLength(0);
  });

  test('hero section renders', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('key sections are present', async ({ page }) => {
    await page.goto('/');

    // Verify major sections exist by heading or landmark text
    await expect(page.getByText(/pricing/i).first()).toBeVisible();
    await expect(page.getByText(/compliance/i).first()).toBeVisible();
    await expect(page.getByText(/deliverables/i).first()).toBeVisible();
  });

  test('screenshot of full page', async ({ page }) => {
    await page.goto('/');
    await page.screenshot({ path: 'tests/screenshots/home.png', fullPage: true });
  });
});
