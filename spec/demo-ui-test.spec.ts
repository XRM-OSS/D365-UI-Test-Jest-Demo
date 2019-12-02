import { XrmUiTest } from "d365-ui-test";
import * as fs from "fs";
import * as puppeteer from "puppeteer";
import * as path from "path";

const xrmTest = new XrmUiTest();
let browser: puppeteer.Browser = null;
let page: puppeteer.Page = null;

const clearFiles = async (pathName: string, fileEndings: Array<string>): Promise<void> => {
    const folderExists = await new Promise((resolve, reject) => 
        fs.exists(pathName, (exists) => {
            resolve(exists);
        })
    );

    if (folderExists) {
        return;
    }

    return new Promise((resolve, reject) => 
        fs.readdir(pathName, (err, files) => err 
            ? reject(err) 
            : resolve(files.filter(f => fileEndings.some(e => f.endsWith(e))).forEach(f => fs.unlinkSync(path.resolve(pathName, f))))));
}

describe("Basic operations UCI", () => {
    beforeAll(async () => {
        jest.setTimeout(60000);
        await clearFiles("./reports", [".pdf'", ".pdf"]);

        browser = await xrmTest.launch({
            headless: false,
            args: ["--start-fullscreen"],
            defaultViewport: null
        });
    });

    test("Start D365", async () => {
        const config = fs.readFileSync("C:/temp/settings.txt", {encoding: 'utf-8'});
        const [url, user, password] = config.split(",");

        page = await xrmTest.open(url, { userName: user, password: password });
    });

    test("Open new account form", async () => {
        await xrmTest.Navigation.openCreateForm("account");
    });

    afterAll(() => {
        return xrmTest.close();
    });
});
