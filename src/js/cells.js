/** Mapping of traditional `i` loop value to lettered cell value */
const letteredCells = {
    "0": "A",
    "1": "B",
    "2": "C",
    "3": "D",
    "4": "E",
    "5": "F",
    "6": "G",
    "7": "H",
    "8": "I",
}

/** Mappings for cells from backend and frontend */
class cells {

    /*** A static method mapping of i, j loop values to identifiable A-I cell values
     * @param {number} i 0-9 integer
     * @param {number} j 0-9 integer
     * @returns {string} A1-I9 string
     */
    static getLetteredCell(i, j) {
        i = i.toString();
        // Add 1 to j match loop value (starting from 0) to real value
        j = (j+1).toString();
        return `${letteredCells[i]}${j}`
    }
}
