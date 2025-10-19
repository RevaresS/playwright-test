// function filter_list(l) {
//     const arr = []
//     for ( let i = 0; i < l.length; i ++){
//         if (Number.isInteger(l[i])){
//             var c = l[i]
//             arr.push(c)
//         }
//     }
//     return arr
//   }

// function lovefunc(flower1, flower2){
//     if (flower2 % 2 == 1 && flower1 % 2 == 0){
//         return true
//     }
//     else if (flower1 % 2 == 1 && flower2 % 2 == 0){
//         return true
//     }
//     return false
//   }

// function reverseWords(str) {
//     let words = str.split(' ');
//     console.log(words)
//     let reversedWords = words.map((word) => word.split('').reverse().join(''));
//     return reversedWords.join(' ');
//   }
//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

//   '.god yzal eht revo spmuj xof nworb kciuq ehT' 
//   'ehT kciuq nworb xof spmuj revo eht yzal .god'


/* import { test, Page, expect } from '@playwright/test'
import { allure } from 'allure-playwright'

import valuesError from '../fixtures/values-error.json'
import elements from '../fixtures/buttons-actions.json'
import locators from '../fixtures/locators.json'

import { getApi } from '~/api/client'
import { ordersUrl } from '~/consts'

export default class ApprovePage {

	constructor(public page: Page, public needGoto = true) {
		if (needGoto) {
			page.goto(ordersUrl(process.env.MESH as string), { timeout: 0 })
		}
	}
	api = getApi()

	async checkStateOrder(demandId:string, stateName: string) {
		await test.step(`Проверка статуса тестового заказа: "${stateName}"`, async () => {
			let checkStateInFirstOrder = false
			do {
				await this.page.locator(locators.reloadDataButton).click()
				await this.page.locator(`//*[@data-qa-demand-list-id ='${demandId}' ]//*[@data-qa='demand_list_toggler']`).click()
				await this.page.locator(`//*[@data-qa-demand-list-id ='${demandId}' ]//*[@data-qa='demand_list_toggler']`).waitFor()
				checkStateInFirstOrder = await this.page.locator(locators.orderStatus).innerText() != stateName
			} while (checkStateInFirstOrder)})
		await allure.attachment('Просмотр скрина', await this.page.screenshot(), { contentType: 'image/png' })
	}
} */

// function factorial(n) { 
// if (n == 0) { 
// return 1; 
// } else { 
// return factorial(n - 1) * n; 
// } 
// } 

// console.log(factorial(8))