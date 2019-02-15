export function Matrix(str) {
    // Parse string by separating rows
    let rowStrings = str.split('\n');

    let rows = [];
    // Loop through rows, adding a new array to rows and parsing it
    for (let i = 0; i < rowStrings.length; i++) {
        rows.push([]);
        rows[i] = rowStrings[i].split(' ');
        // Convert strings to numbers
        rows[i] = rows[i].map(Number);
    }

    let columns = [];
    // Amount of columns will equal length of first row
    for (let i = 0; i < rows[0].length; i++) {
        columns.push([]);
        // Map nth item of each row to the nth column
        columns[i] = rows.map(cur => Number(cur[i]));
    }

    this.rows = rows;
    this.columns = columns;
}