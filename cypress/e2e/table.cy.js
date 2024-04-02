describe("Handle tables", () => {
    beforeEach('login',() => {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get("[name='username']").type("demo")
        cy.get("[name='password']").type("demo")
        cy.get("[type='submit']").click()
        cy.get("[name='name']").click({force: true})
        cy.get(".parent.collapsed[href='#collapse-5']").click({force: true}); // customers main menu
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click({force: true}); //customers child item
    })

    //it block
    it.skip('check number of rows and columns', () => {
        cy.get("table.table-bordered.table-hover tbody tr").should("have.length", 10);
        cy.get("table.table-bordered.table-hover thead tr td").should('have.length', 7);
    })

    //checking cell data from specific row $ column
    it.skip('checking data in a cell',() =>{
        //lets say i want to check if
        // on the fifth row and third column contains a particular element like email 
        cy.get("table[class ='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3 ").should('contain',"hfgjhgjgjggj@gmail.com");
    })
     
        //suppose a page has more than one pages but then you want to read the first page
        //so reading a page that does not have pagenation meaning it has only one page
        //reading all the rows and colums on one page

    it.skip("reading all the rows and column data in the first page",() =>{
        //get all the rows
        cy.get("table[class ='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows) =>{
            //rows-all the rows in the tablw
            //index - indexes of all the rows in the table
            //$row - a variable that is keeping the current row of the table
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols) =>{
                    cy.log($col.text());
                })
            })
        })

    })

    //getting a data when there is a pagination
    it.skip("reading data with pagination",() =>{
        let totalPages;
         //first find the total number of pages 
         cy.get("div[class='col-sm-6 text-end']").then((e) =>{
            let MypageNumberText = e.text(); //this variable contains this value Showing 1 to 10 of 18910 (1891 Pages)
            totalPages = MypageNumberText.substring(MypageNumberText.indexOf("(")+1, MypageNumberText.indexOf("Pages")-1);
            cy.log(`total number of pages ${totalPages}`)

         })
    })
    it("reading a few pages fromt the entire page",()=>{
        //lets read 5 pages
        let pages=5
        for(let p=1; p<= pages; p++){
            if (pages>1){
                //cy.log('Active pages =' +p)
                cy.get(".row>div>ul>li:nth-child("+p+")").click();
                cy.wait(5000  )

                cy.get("table.table-bordered.table-hover tbody tr").each(($row, index,$rows) =>{
                    cy.wrap($row).within(() =>{
                        cy.get('td:nth-child(3) ').then((e) =>{
                            cy.log(e.text());//get the email address
                        })
                    })
                })
            }
        }
})

})
