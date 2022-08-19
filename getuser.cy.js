/// <reference types="Cypress" />


describe('api test cases',() => {
    let accesstoken= 'a285abfea91ff9cb71f7fe738bb8bf7fb65f9f0668bb963852defb5407d2ff82'
    it('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users5162',
            headers: {
                'Authorization': 'Bearer ' + accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).has.property('limit',10)

        })
    })
    it('get user by id', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/5162',
            headers: {
                'Authorization': 'Bearer '+accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Golden Test')

        })
    })
 
})