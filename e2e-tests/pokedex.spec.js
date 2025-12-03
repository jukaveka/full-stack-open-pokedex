import { test, describe, expect, beforeEach } from 'playwright/test'

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('page of speficic Pokemon can be opened', async ({ page }) => {
    await page.getByTestId('ivysaur-link').click()

    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})