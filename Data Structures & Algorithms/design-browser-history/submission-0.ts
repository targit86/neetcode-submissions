class BrowserHistory {
    history: Array<string>;
    activePageIndex: number;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.history = new Array();
        this.history.push(homepage);
        this.activePageIndex = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url: string): void {
        if (this.activePageIndex < (this.history.length - 1)) {
            this.history = this.history.slice(0, this.activePageIndex + 1);
        }
        this.history.push(url);
        this.activePageIndex = this.history.length - 1;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps: number): string {
        let activeIndex = this.activePageIndex - steps;
        if (activeIndex < 0) {
            activeIndex = 0;
        }
        this.activePageIndex = activeIndex;
        return this.history.at(activeIndex);
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps: number): string {
        let activeIndex = this.activePageIndex + steps;
        const max = this.history.length - 1;
        if (activeIndex > max) {
            activeIndex = max;
        }
        this.activePageIndex = activeIndex;
        return this.history.at(activeIndex);
    }
}
