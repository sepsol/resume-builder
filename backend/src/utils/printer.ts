import puppeteer, { Browser, PDFOptions } from 'puppeteer';

export const printPage = async (
  url: string = 'http://localhost:5173/',
  config?: { browser?: Browser; options?: PDFOptions },
) => {
  try {
    const browser = config?.browser
      ? await puppeteer.connect({ browserURL: config.browser.wsEndpoint() })
      : await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    await page.pdf(
      config?.options ?? {
        format: 'LETTER',
        path: '../resume.pdf',
        printBackground: true,
      },
    );

    if (config?.browser) await browser.disconnect();
    else await browser.close();
  } catch (error) {
    console.error(error);
  }
};
