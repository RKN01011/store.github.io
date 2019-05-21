import { SET_BOOKCHOSE } from "../hellpers/api"

const m = "mini"
const s = "standart"
const b = "big"
const ind = "ind"

const statestore = [
    { src: require("../img/Reducers/basket1.webp"), name: "Рюкзак 1", price: "5 400,00", type: m, core: ind, sale: "new" },
    { src: require("../img/Reducers/basket2.webp"), name: "Рюкзак 2", price: "5 200,00", type: b, core: ind, sale: "new" },
    { src: require("../img/Reducers/basket3.webp"), name: "Рюкзак 3", price: "4 800,00", type: s, core: ind, sale: "new" },
    { src: require("../img/Reducers/basket3v1.webp"), name: "Рюкзак 3v1", price: "14 839,90", type: s, sale: "new" },
    { src: require("../img/Reducers/basket3v2.webp"), name: "Рюкзак 3v2", price: "34 849,90", type: s, sale: "new" },
    { src: require("../img/Reducers/basket2v1.webp"), name: "Рюкзак 2v1", price: "5 800,00", type: b, sale: "new" },
    { src: require("../img/Reducers/basket2v2.webp"), name: "Рюкзак 2v2", price: "6 999,99", type: b, sale: "new" },
    { src: require("../img/Reducers/basket2v3.webp"), name: "Рюкзак 2v3", price: "5 800,00", type: b, },
    { src: require("../img/Reducers/basket2v5.webp"), name: "Рюкзак 2v4", price: "6 999,99", type: b, },
    { src: require("../img/Reducers/basket2v6.webp"), name: "Рюкзак 2v5", price: "6 999,99", type: b, },
    { src: require("../img/Reducers/basket1v1.webp"), name: "Рюкзак 1v1", price: "5 800,00", type: m, },
    { src: require("../img/Reducers/basket1v2.webp"), name: "Рюкзак 1v2", price: "6 800,00", type: m, },
];

export default function basket (state = statestore, action){
    switch(action.type){
        case SET_BOOKCHOSE:
        return [action.payload];
        default:
        return state;
    }
}

export {statestore};