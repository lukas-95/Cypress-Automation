/// <reference types="Cypress" />
const dataJson = require('../fixtures/userdata')


it('create user test', () => {
    let accesstoken= 'a285abfea91ff9cb71f7fe738bb8bf7fb65f9f0668bb963852defb5407d2ff82'

            
    //1. create user (POST)
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
            'Authorization': 'Bearer ' + accesstoken
        },
        body: {
            "name": dataJson.name, 
            "email": dataJson.email,
            "gender": dataJson.gender,
            "status": dataJson.status
        }

    }).then((res)=>{
        cy.log(res)
        expect(res.status).to.eq(201)
        expect(res.body.data).has.property('name',dataJson.name)
        expect(res.body.data).has.property('email',dataJson.email)
   
    

     })
})