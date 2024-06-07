const { test, expect } = require('@playwright/test');

test.describe('Verificar carrinho vazio no Kabum', () => {
  test('Deve mostrar a mensagem "O seu carrinho está vazio."', async ({ page }) => {
  
    await page.goto('https://www.kabum.com.br');

    await page.locator('a[href="/carrinho"]').click();

    const emptyCartMessage = await page.locator('text=O seu carrinho está vazio.');
    await expect(emptyCartMessage).toBeVisible();
  });
});
