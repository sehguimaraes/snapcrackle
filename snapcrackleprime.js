function snapCrackle(maxValue) {
    let text = "";
    for (let cont = 1; cont <= maxValue; cont++) {
        if (cont % 2 !== 0) {
            text += "Snap, ";
            continue;
        }
        if (cont % 5 === 0) {
        text += "Crackle, ";
        continue;
        }
        if (cont % 2 !== 0 && cont % 5 === 0) {
            text += "SnapCrackle, ";
            continue;
        }
        if (cont % 2 === 0) {
            text += "Prime, ";
            continue;
        }
        text += cont + ", ";
    }
    return text;
}

snapCrackle();