

export function containsOnlyEmptyStrings(arr: string[]) {
    return arr.every(str => str === "");
}

export function getAllLocalStorageKeys() {
    const items = [] as string[];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        if (!key.startsWith("title")) {continue}
        items.push(key);
    }

    return items;
}

export function getStringUpToCharacter(str: string, char: string) {
    const index = str.indexOf(char);

    if (index === -1) {
        return str; // Character not found, return the whole string
    } else {
        return str.slice(0, index);
    }
}


