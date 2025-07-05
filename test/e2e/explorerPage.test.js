const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

describe('Explorer Page', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should navigate and show directories and PDFs', async () => {
    await driver.get('http://localhost:3000/explorer/CS303');

    await driver.wait(until.elementLocated(By.css('h1')), 5000);
    
    // Check if the directory "CS303_Algorithms_and_DataStructures" exists
    const directoryLink = await driver.findElement(By.linkText('CS303_Algorithms_and_DataStructures'));
    expect(await directoryLink.isDisplayed()).toBe(true);

    // Check if PDF "Lecture1_Introduction.pdf" is available
    const pdfLink = await driver.findElement(By.linkText('Lecture1_Introduction.pdf'));
    expect(await pdfLink.isDisplayed()).toBe(true);
  });
});
