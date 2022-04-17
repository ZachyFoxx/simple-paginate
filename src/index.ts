import { Paginator } from "../lib";

export const SimplePaginator = <T>(objects: T[], max: number): Paginator<T> => {
    const paginator = new Paginator<T>(objects, max);
    return paginator;
};