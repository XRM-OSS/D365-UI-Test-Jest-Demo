import { XrmUiTest } from "d365-ui-test";
import * as fs from "fs";
import * as playwright from "playwright";
import * as path from "path";

const xrmTest = new XrmUiTest();
let browser: playwright.Browser = null;
let page: playwright.Page = null;

describe("Basic operations UCI", () => {
    beforeAll(async () => {
        jest.setTimeout(60000);

        await xrmTest.launch("chromium", {
            headless: false,
            args: ["--start-fullscreen"]
        })
        .then(([b, p]) => {
            browser = b;
            page = p;
        });
    });

    test("Start D365", async () => {
        const config = fs.readFileSync(path.join(__dirname, "../../settings.txt"), {encoding: 'utf-8'});
        const [url, user, password] = config.split(",");
    });

    test("Open new account form", async () => {
        await xrmTest.Navigation.openCreateForm("account");
    });

    afterAll(() => {
        return xrmTest.close();
    });
});
