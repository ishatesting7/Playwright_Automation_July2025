//Hooks
import  {test,expect} from "@playwright/test"

test.beforeAll(async () => {
    console.log("I am in before all");
})

test.beforeEach(async ({page}) => {
    console.log("I am in before each");
})
test.afterEach(async ({page}) => {
    console.log("I am in after each");
})
test.afterAll(async () => {
    console.log("I am in after all");
})
test.describe('Grouping1', () => {

    test('Grouping Test 1', async ({ page }) => {
        console.log("I am in Grouping1 testcase 1");
    })

    test('Grouping Test 2', async ({ page }) => {
        console.log("I am in Grouping1 testcase 2");

    })

    test('Grouping Test 3', async ({ page }) => {
        console.log("I am in Grouping1 testcase 3");

    })

    test('Grouping Test 4', async ({ page }) => {
        console.log("I am in Grouping1 testcase 4");

    })
});

test.describe('Grouping2', () => {

    test('Grouping Test 1', async ({ page }) => {
        console.log("I am in Grouping2 testcase 1");

    })

    test('Grouping Test 2', async ({ page }) => {
        console.log("I am in Grouping2 testcase 2");

    })

    test('Grouping Test 3', async ({ page }) => {
        console.log("I am in Grouping2 testcase 3");

    })

    test('Grouping Test 4', async ({ page }) => {
        console.log("I am in Grouping2 testcase 4");

    })
});
