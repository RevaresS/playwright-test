import { test as setup, expect } from '@playwright/test'

import elements from '../fixtures/locators.json'

import { yandex } from '../consts'

const authFile = '.auth/user.json'

setup('Авторизация пользователя', async ({ page }) => {
	await page.goto(yandex(process.env.MESH as string))
	// await page.getByLabel('Логин').fill('login')
	// if (await (page.getByLabel('Пароль')).isHidden()) await page.getByText('Продолжить').click()
	// await page.getByLabel('Пароль').fill('password')
	// await page.getByText('Войти').click()
	await page.locator(elements.dzenHeader).waitFor()
	await expect(page.locator(elements.dzenHeader)).toBeVisible()
	//await page.waitForURL(/https:\/\/dzen\.ru\.me\/.*/gm)
	await page.context().storageState({ path: authFile })
})
