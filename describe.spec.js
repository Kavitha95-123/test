import { test } from '@playwright/test';
import { describe } from "node:test";
 test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});