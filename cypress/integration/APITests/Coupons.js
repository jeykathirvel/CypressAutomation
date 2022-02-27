/// <reference types="Cypress" />
const testData = require('../../fixtures/td.json')

describe('create bulk coupons', () => {

    it('create one coupon only', () => {

        cy.request({

            method: 'POST',
            url: testData.admin_stage_uri +'/user/api/v1/admin/coupon/generate/1',
            headers: {

                'Authorization': 'Bearer ' + testData.admin_access_token

            },
            body: {

                "partnerName": "kisna",
                "productType": "",
                "startDate": "2021-06-06T00:00:00",
                "endDate": "2022-03-28T00:00:00",
                "referenceId": "jey1",
                "couponRuleId": "4",
                "status": "active"

            }
        }).then((res) => {
            
            expect(res.status).to.eq(201)
        })




    });




})