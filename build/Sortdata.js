"use strict";
class SortData {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    const left = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = left;
                }
            }
        }
    }
}
