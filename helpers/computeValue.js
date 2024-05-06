import { getState } from "../main/initApp.js"

const types = {
    "relation" : handleRelation
}


export function computeValue(value) {

    for (const iterator in value) {
        let item = value[iterator]

        if (typeof item === "object" && item.type === "relation") {
            value[iterator] = types[item.type](item)
        }
    }

    return value
}


function handleRelation(relation) {
    const { value, placeholderPosition, relyOn } = relation

    let relyOnValue = ""
    if (relyOn === "slug") {
        relyOnValue = getState("country")
    }

    const arrayValue =  value.split("")
    const splitted = arrayValue.toSpliced(placeholderPosition, 0, relyOnValue.toLowerCase())
    const newValue = splitted.join("")

    return newValue
}