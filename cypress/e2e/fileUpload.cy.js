import 'cypress-file-upload';

//take a look at shadow doms again

describe("cypress file upload", () =>{
    it("single file upload", () =>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("ManualtestingNotes.pdf")
        cy.get("#file-submit").click()
        cy.wait(5000)

        //validate the file uploaded sucessfully message
        cy.get("div[class='example'] h3").should("have.text",'File Uploaded!')
    })
    it.skip("File upload rename file before upload", () =>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:"ManualtestingNotes.pdf",fileName:'manualtesting.pdf'})
        cy.get("#file-submit").click()
        cy.wait(5000)

        //validate the file uploaded sucessfully message
        cy.get("div[class='example'] h3").should("have.text",'File Uploaded!')
    })
    
    it.skip('upload file - drag and drop', () =>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        //cy.get("#drag-drop-upload").attachFile("ManualtestingNotes.pdf",{subjectType:'drag-n-drop'});
        cy.get("#drag-drop-upload").attachFile({filePath:"ManualtestingNotes.pdf",fileName:'manualtesting'},{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("manualtesting");

    })
    it('uploading multiple files', () =>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(['ManualtestingNotes.pdf','AmazonAurora.pdf'])
        cy.xpath("//strong[normalize-space()='Files You Selected:']").contains("Files You Selected:")
    })
    it.only('file upload-shadow Dom', () =>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get("smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(1) > smart-button:nth-child(1) > button:nth-child(1)",{includeShodowDom:true}).attachFile('ManualtestingNotes.pdf')
    })
}) 