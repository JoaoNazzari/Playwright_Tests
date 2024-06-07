const { test, expect } = require('@playwright/test');

test('Verificar se a quantidade no carrinho é igual a 1 no Saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item:nth-child(1) .btn_inventory');

  await page.click('.shopping_cart_container');

  const cartItemCount = await page.innerText('.shopping_cart_badge');
  await expect(cartItemCount).toBe('1');
});