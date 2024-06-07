const { test, expect } = require('@playwright/test');

test.describe('Acessar página GaúchaZH', () => {
  test('Visualizar últimas notícias de esportes', async ({ page }) => {

    await page.goto('https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/');
    
    const titles = await page.$$eval('.title', titles => titles.map(title => title.textContent));
    expect(titles.length).toBeGreaterThan(0);
  });
});
