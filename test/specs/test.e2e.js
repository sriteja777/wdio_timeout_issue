import { expect, browser, $ } from '@wdio/globals'


const sleep = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        await sleep(1000)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('test 2', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

