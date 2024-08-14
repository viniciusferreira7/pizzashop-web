import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('--5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('37', { exact: true })).toBeVisible()
  expect(page.getByText('+5% em relação ao mês passado')).toBeVisible()
})

test('display month canceled orders amount metrics', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('12', { exact: true })).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^12-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})
test('display month revenue', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('R$ 200,00')).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado').first()).toBeVisible()
})
