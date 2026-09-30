import { expect, test } from '@playwright/test';

test.describe('ByteSpace smoke', () => {
    test('landing page renders hero content and LCP image', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByRole('heading', { name: /get access to hundreds/i })).toBeVisible();
        const heroImage = page.getByAltText('Student learning').first();
        await expect(heroImage).toBeVisible();
        expect(await heroImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(
            true,
        );
    });

    test('courses pagination drives the grid from the URL', async ({ page }) => {
        await page.goto('/courses?page=2');

        await expect(page.getByRole('heading', { name: /find your next course/i })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page');
        await expect(page.locator('a[href^="/courses/course-"]').first()).toBeVisible();
    });

    test('course card navigates to the details page', async ({ page }) => {
        await page.goto('/courses');

        await page.locator('a[href^="/courses/course-"]').first().click();
        await expect(page).toHaveURL(/\/courses\/course-/);
    });

    test('unknown routes show the 404 page with a way home', async ({ page }) => {
        await page.goto('/nope-xyz');

        await expect(page.getByRole('heading', { name: /doesn't exist/i })).toBeVisible();
        await page.getByRole('link', { name: /back to home/i }).click();
        await expect(page).toHaveURL('/');
    });

    test('no local images, icons, or fonts fail to load', async ({ page }) => {
        const failed: string[] = [];
        page.on('response', (response) => {
            const url = response.url();
            if (
                response.status() >= 400 &&
                (url.includes('/images/') || url.includes('/icons/') || url.includes('/layout-designs/') || url.includes('/fonts/'))
            ) {
                failed.push(`${response.status()} ${url}`);
            }
        });

        for (const route of ['/', '/courses', '/creators', '/login']) {
            await page.goto(route);
            await page.waitForLoadState('networkidle');
        }

        expect(failed).toEqual([]);
    });
});
