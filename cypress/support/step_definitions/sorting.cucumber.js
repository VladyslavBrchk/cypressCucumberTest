import { When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import InventoryPage from '../../pages/inventory.page';

let isSorted;

When('A user selects a {string} filter', (filter) => {
    switch(filter){
        case "Name (A to Z)": InventoryPage.selectAZFilter();
        break;
        case "Name (Z to A)": InventoryPage.selectZAFilter();
        break;
        case "Price (low to high)": InventoryPage.selectLoHiFilter();
        break;
        case "Price (high to low)": InventoryPage.selectHiLoFilter();
        break;
    }
})

Then ('Elements are filtered by {string}', (filter) => {
    switch(filter){
        case "Name (A to Z)": isSorted = InventoryPage.isSortedAZ(InventoryPage.inventoryItemTitleArray());
        expect(isSorted).to.be.true;
        break;
        case "Name (Z to A)": isSorted = InventoryPage.isSortedZA(InventoryPage.inventoryItemTitleArray());
        expect(isSorted).to.be.true;
        break;
        case "Price (low to high)": isSorted = InventoryPage.isSortedLoHi(InventoryPage.inventoryItemTitleArray());
        expect(isSorted).to.be.true;
        break;
        case "Price (high to low)": isSorted = InventoryPage.isSortedHiLo(InventoryPage.inventoryItemTitleArray());
        expect(isSorted).to.be.true;
        break;
    }
})