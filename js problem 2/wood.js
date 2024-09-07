function woodQuantity(chairQuantity, tableQuantity, badQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBadWood = 50;
    
    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const badTotalWood = badQuantity * perBadWood;

    const totalWood = chairTotalWood + tableTotalWood + badTotalWood;

    return totalWood;
};

const wood = woodQuantity(6, 1, 1)
console.log('Wood Need',wood);