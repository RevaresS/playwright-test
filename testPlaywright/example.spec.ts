import { test } from '@playwright/test'
// import { allure } from 'allure-playwright'

import elements from '../fixtures/locators.json'
import Filter from '../pages/page-for-test'

test.describe.configure({ mode: 'parallel' })

test('Проверка доступности действий по заказу в статусе "Модерация"', async ({ page }) => {
	//Arrange
	const filterPage = new Filter(page)
	//Act
	await filterPage.selectingFilterById(`${elements.AutoSignUpBtn}`)
	//Assert
	//await filterPage.selectingFilterById(`${elements.AutoSignUpBtn}`)
})