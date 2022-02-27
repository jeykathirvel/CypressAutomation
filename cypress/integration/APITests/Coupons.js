/// <reference types="Cypress" />
describe('create bulk coupons', () => {
    let admin_access_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmNWQ4ZTc0ZjNjNDg2ZWU1MDNkNWVlYzkzYTEwMWM2NGJhY2Y3ZGEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSmV5ZW5kcmFuIEthdGhpcnZlbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp3dzhpd0lpYUl3MUpfRm5Fdk14UmJrdzB0TzNpUkZmSDc4UmxxRT1zOTYtYyIsImFkbWluIjp0cnVlLCJhY2Nlc3NMZXZlbCI6OSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21haGlsYW1vbmV5LWFwcCIsImF1ZCI6Im1haGlsYW1vbmV5LWFwcCIsImF1dGhfdGltZSI6MTY0NTU0NzgyMSwidXNlcl9pZCI6IkNSa2sxVmNVRHdhY3hZMGtFa3NxMGRhT2E0UzIiLCJzdWIiOiJDUmtrMVZjVUR3YWN4WTBrRWtzcTBkYU9hNFMyIiwiaWF0IjoxNjQ1OTg3MjA2LCJleHAiOjE2NDU5OTA4MDYsImVtYWlsIjoiamV5ZW5kcmFuQG1haGlsYS5tb25leSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA3ODEwMTM4MDU1ODA5OTgyNzA3Il0sImVtYWlsIjpbImpleWVuZHJhbkBtYWhpbGEubW9uZXkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.nUG0sCiFpiN2RGUsyDv-YnIpc8bqUdMLd8OIHVH3X5YND1ZC5oMgRZcsOga5z7tQDEg_llXfVldTGskNAs80FbTlqOyaLI-9ClWKHsxTawJIHTVy4_EpuOoxKs4ok9_f6A2wz7-ZJO_sc0ZtLN91Kynm0YEzRG-t_tNbGOyofyidLyH8KiPjIk4VrX1BBy0cdgbckhqLqjPyjvjl5RkjTIdbYuh9jIDTvxoT-IBSYutvEjpfDXC7Hw-IsLl-OleZQ7UWrdTjQWbikpGGVGbGSGI7D4pUO7E6sBp-NMI0pLOFFVCZHcdT4w2xS-vPki_tdXKqWjAQmq1gv9uwIk42JA';

    it('create one coupon only', () => {

        cy.request({

            method: 'POST',
            url: 'https://gateway.stage.mahila.money/user/api/v1/admin/coupon/generate/1',
            headers: {

                'Authorization': 'Bearer ' + admin_access_token

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