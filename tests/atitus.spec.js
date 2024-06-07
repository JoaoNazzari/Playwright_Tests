const { test, expect } = require('@playwright/test');

test.describe('Acessar página Atitus', () => {
  test('Verificar existência do botão "Cursos" na aba inicial', async ({ page }) => {
    // Dado que o usuário está na página inicial da Atitus
    await page.goto('https://atitus.edu.br');

    const cursosButton = await page.waitForSelector('text="Cursos"', { state: 'visible' });
    expect(cursosButton).toBeTruthy();
  });
});
