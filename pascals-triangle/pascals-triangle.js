export class Triangle {
    constructor(numRows) {
        var rows = Array(numRows);
        for (let i = 0; i < numRows; i++) {
            rows[i] = Array(i + 1);
            for (let j = 0; j < rows[i].length; j++) {
                if (j === 0 || j === rows[i].length - 1) {
                    rows[i][j] = 1;
                }
                else {
                    rows[i][j] = rows[i - 1][j] + rows[i - 1][j - 1];
                }
            }
        }
        this.rows = rows;
        if (rows.length > 1) {
            this.lastRow = rows[rows.length - 1];
        }
    }
}