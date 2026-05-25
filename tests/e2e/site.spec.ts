import { expect, test } from '@playwright/test'

test('home, writing, projects, about, bookmarks, and bookshelf render', async ({
  page,
}) => {
  await page.goto('/')
  await expect(page.getByText('Recent Writing')).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Side Projects' })
  ).toBeVisible()
  await page.getByRole('link', { name: 'Read all posts' }).click()
  await expect(page).toHaveURL(/\/writing$/)
  await expect(page.locator('[data-cy="writing"]')).toBeVisible()
  await expect(page.locator('[data-cy="writing-subscribe-box"]')).toBeVisible()

  await page.goto('/projects')
  await expect(page.locator('[data-cy="projects-page"]')).toBeVisible()
  await page.getByRole('link', { name: 'Bookmarks' }).click()
  await expect(page).toHaveURL(/\/bookmarks$/)
  await expect(page.locator('[data-cy="bookmarks"]')).toBeVisible()
  await expect(page.getByText('How to Do Great Work')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Podcasts' })).toBeVisible()

  await page.goto('/about')
  await expect(page.locator('[data-cy="about-page"]')).toBeVisible()
  await expect(page.locator('img[alt="A photo of me"]')).toBeVisible()

  await page.goto('/bookshelf')
  await expect(page.locator('[data-cy="bookshelf-page"]')).toBeVisible()
  await expect(page.locator('[data-cy="bookshelf-book-link"]').first()).toBeVisible()
})

test('bookshelf opens a book detail page', async ({ page }) => {
  await page.goto('/bookshelf')
  const book = page.locator(
    '[data-book-slug="antifragile-things-that-gain-from-disorder"]'
  )
  const href = await book.getAttribute('href')

  expect(href).toBe('/bookshelf/antifragile-things-that-gain-from-disorder')
  await page.goto(href)

  await expect(page).toHaveURL(/\/bookshelf\/antifragile/)
  await expect(page.locator('[data-cy="bookshelf-detail-page"]')).toBeVisible()
  await expect(page.locator('[data-cy="bookshelf-quote"]').first()).toBeVisible()
})

test('removed sections return 404', async ({ page }) => {
  const response = await page.goto('/app-dissection')
  expect(response?.status()).toBe(404)

  const stackResponse = await page.goto('/stack')
  expect(stackResponse?.status()).toBe(404)

  const loginResponse = await page.goto('/login')
  expect(loginResponse?.status()).toBe(404)
})

test('old bookmark category pages redirect to bookmarks', async ({ page }) => {
  const response = await page.goto('/bookmarks/reading')

  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveURL(/\/bookmarks$/)
})
