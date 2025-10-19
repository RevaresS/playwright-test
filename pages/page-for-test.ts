import { test, Page, expect } from '@playwright/test'

import elements from '../fixtures/locators.json'

import { ordersUrl, yandex } from '../consts'

export default class Filter {

	constructor(public page: Page, private needGoto = true) {
		if (needGoto) {
			page.goto(yandex(process.env.MESH as string), { timeout: 0 })
		}
	}

	async selectingFilterById(nameService?: string) {
		await test.step(`Переходим на страницу ${nameService}`, async () => {
			await this.page.locator(elements.title).first().waitFor()
			await expect(await this.page.locator(elements.title).first()).toContainText('Новости')
		})
	}
}
