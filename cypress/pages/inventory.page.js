class InventoryPage {
    elements = {
        inventoryBurger: () => cy.get('#react-burger-menu-btn'),
        logoutButton: () => cy.get('#logout_sidebar_link'),
        navigationMenuItems: () => cy.get('.bm-item'),
        inventoryItem: () => cy.get('.inventory_item'),
        inventoryItemTitle: () => cy.get('.inventory_item_name'),
        inventoryItemPrice: () => cy.get('.inventory_item_price'),
        inventoryItemAddButton: () => cy.get('.inventory_item .btn'),
        cart: () => cy.get('.shopping_cart_container'),
        filter: () => cy.get('.product_sort_container'),
        twitterLink: () => cy.get('.footer [href="https://twitter.com/saucelabs"]'),
        facebookLink: () => cy.get('.footer [href="https://www.facebook.com/saucelabs"]'),
        linkedInLink: () => cy.get('.footer [href="https://www.linkedin.com/company/sauce-labs/"]')
    }

    clickInventoryBurger() {
        this.elements.inventoryBurger().click();
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
    }

    navigationMenuLength() {
        return this.elements.navigationMenuItems().its('length');
    }

    addInventoryItem(index) {
        this.elements.inventoryItemAddButton().eq(index).click();
    }

    cartBadge() {
        return this.elements.cart().invoke('text').then((text) => {
            return parseInt(text);
        });
    }

    inventoryItemAddButtonText(index) {
        return this.elements.inventoryItemAddButton().eq(index).invoke('text').then((text) => {
            return text;
        });
    }

    inventoryItemTitle(index) {
        return this.elements.inventoryItemTitle().eq(index).invoke('text').then((text) => {
            return text;
        });
    }

    inventoryItemPrice(index) {
        return this.elements.inventoryItemPrice().eq(index).invoke('text').then((text) => {
            return parseFloat(text.replace(/\$/g, ""));
        });
    }

    inventoryItemTitleArray() {
        const arr = []
        for (let i=0; i<this.elements.inventoryItem().its('length'); i++){
            arr.push(this.inventoryItemTitle(i))
        }
        return arr;
    }

    selectAZFilter() {
        this.elements.filter().select('az')
    }

    selectZAFilter() {
        this.elements.filter().select('za')
    }

    selectLoHiFilter() {
        this.elements.filter().select('lohi')
    }

    selectHiLoFilter() {
        this.elements.filter().select('hilo')
    }

    isSortedAZ(texts){
        for (let i = 1; i < texts.length; i++) {
            if (texts[i] < texts[i - 1]) {
                return false;
            }
        }
        return true;
    }

    isSortedZA(texts){
        for (let i = 1; i < texts.length; i++) {
            if (texts[i] > texts[i - 1]) {
                return false;
            }
        }
        return true;
    }

    isSortedLoHi(prices){
        for (let i = 1; i < prices.length; i++){
            const curPrice = parseFloat(prices[i].replace('$', ''));
            const prevPrice = parseFloat(prices[i - 1].replace('$', ''));
            if (curPrice < prevPrice){
              return false;
            }
          }
          return true;
    }

    isSortedHiLo(prices){
        for (let i = 1; i < prices.length; i++){
            const curPrice = parseFloat(prices[i].replace('$', ''));
            const prevPrice = parseFloat(prices[i - 1].replace('$', ''));
            if (curPrice > prevPrice){
              return false;
            }
          }
          return true;
    }

    clickTwitterLink(){
        this.elements.twitterLink().invoke("removeAttr", "target").click();
    }

    clickFacebookLink(){
        this.elements.facebookLink().invoke("removeAttr", "target").click();
    }

    clickLinkedInLink(){
        this.elements.linkedInLink().invoke("removeAttr", "target").click();
    }

    clickCartButton(){
        this.elements.cart().click();
    }

}

module.exports = new InventoryPage()