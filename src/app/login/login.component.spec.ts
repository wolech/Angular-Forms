import { test, expect } from '@playwright/test';

test.describe('Login Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login'); // Adjust the URL to your login page
  });

  test('should display the login form', async ({ page }) => {
    await expect(page.locator('input[name="login"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('should disable login button if form is invalid', async ({ page }) => {
    await page.fill('input[name="login"]', '');
    await page.fill('input[name="password"]', '');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
  });

  test('should enable login button if form is valid', async ({ page }) => {
    await page.fill('input[name="login"]', 'testuser');
    await page.fill('input[name="password"]', 'password');
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
  });

  test('should display error message if login field is empty and touched', async ({ page }) => {
    await page.fill('input[name="login"]', '');
    await page.fill('input[name="password"]', 'password');
    await page.locator('input[name="login"]').blur();
    await expect(page.locator('.error')).toHaveText('First Name is required.');
  });

  test('should display error message if password field is empty and touched', async ({ page }) => {
    await page.fill('input[name="login"]', 'testuser');
    await page.fill('input[name="password"]', '');
    await page.locator('input[name="password"]').blur();
    await expect(page.locator('.error')).toHaveText('Password is required.');
  });

  test('should navigate to customer-update page on successful login', async ({ page }) => {
    await page.fill('input[name="login"]', 'testuser');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/customer-update'); // Adjust the URL to your customer-update page
  });
});