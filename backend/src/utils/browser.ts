import puppeteer, { PuppeteerLaunchOptions } from "puppeteer";

export const startBrowser = async (options?: PuppeteerLaunchOptions) => {
  return await puppeteer.launch(
    options ?? {
      headless: true,
    },
  );
};
