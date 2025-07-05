const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

describe('Index Page', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should load the homepage and display correct elements', async () => {
    await driver.get('http://localhost:3000'); // Localhost URL for Next.js app

    // Wait until the page loads and verify the presence of some elements
    await driver.wait(until.elementLocated(By.css('h1')), 5000);  // Waiting for h1 tag
    
    const heading = await driver.findElement(By.css('h1')).getText();
    expect(heading).toBe('AcademiaDrive Explorer');
    
    // Check if directories (links) are present
    const directoryLink = await driver.findElement(By.linkText('CS303_Algorithms_and_DataStructures'));
    expect(await directoryLink.isDisplayed()).toBe(true);
    
    const pdfLink = await driver.findElement(By.linkText('Lecture1_Introduction.pdf'));
    expect(await pdfLink.isDisplayed()).toBe(true);
  });
});
