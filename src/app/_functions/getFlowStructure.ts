

export function getFlowStructure(type: string) {
    if (type === "ILRGL 3300") {
        return {
            "speeches" : 6,
            "speechNames" : ["PC", "OC", "PR", "OR", "PW", "OW"],
            "times" : [5, 5, 5, 5, 5, 5],
            "sides" : ["Pro", "Con"],
        }
    }
    if (type === "Lincoln Douglas") {
        return {
            "speeches" : 5,
            "speechNames" : ["AC", "NC", "1AR", "2NR", "2AR"],
            "times" : [6, 7, 4, 6, 3],
            "sides" : ["Aff", "Neg"],
        }
    }
    else {
        return {
            "speeches" : 4,
            "speechNames" : ["1AC", "CX", "1NC", "2NR"],
            "times" : [8, 3, 8, 5],
            "sides" : ["Aff", "Neg"],
        }
    }
}

export const defaultFlowStructure = {
    "speeches" : 4,
    "speechNames" : ["1AC", "CX", "1NC", "2NR"],
    "times" : [8, 3, 8, 5],
    "sides" : ["Aff", "Neg"],
}