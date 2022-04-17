export class Paginator<T> {
    objects: T[];
    pagSize: number;
    currentPage: number;
    amountOfPages: number;

    /**
     * @param objects Objects to paginate
     * @param max Maximum amount of objects per page
     * @example
     * const paginator = new Paginator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
     * paginator.next();
     * paginator.currentPage; // 1
     * paginator.getPage(); // [1, 2, 3]
     * paginator.hasNext(); // true
     * paginator.hasPrevious(); // false
     * paginator.next();
     * paginator.currentPage; // 2
     * paginator.getPage(); // [4, 5, 6]
     * // ... so on
     */
    constructor(
        objects: T[],
        max: number
    ) {
        this.objects = objects;
		this.pagSize = max;
		this.amountOfPages = Math.ceil(objects.length / this.pagSize);
        this.currentPage = 0;
    }

    /**
     * Check if there is a next page
     * @returns True if a next page exists
     */
    hasNext(): boolean {
        return this.currentPage < this.amountOfPages;
    }

    /**
     * Check if there is a previous page
     * @returns True if a previous page exists
    */
    hasPrevious(): boolean {
        return this.currentPage > 0;
    }

    /**
     * Increment the page and returns if there is a next page
     * @returns The next page
    */
    next(): boolean {
        if (this.hasNext()) {
            this.currentPage++;
        }
        return this.hasNext();
    }

    /**
     * Decrement the page and returns if there is a previous page
     * @returns The previous page
    */
    previous(): boolean {
        if (this.hasPrevious()) {
            this.currentPage--;
        }
        return this.hasPrevious();
    }

    /**
     * Get the current page
     * @returns The current page
     * @example
     * const paginator = new Paginator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
     * paginator.next();
     * paginator.currentPage; // 1
     * paginator.getPage(); // [1, 2, 3]
     */
    getPage(): T[] {
        return this.objects.slice(this.currentPage * this.pagSize, (this.currentPage + 1) * this.pagSize);
    }

    getPageNumber() {
        return this.currentPage;
    }
}