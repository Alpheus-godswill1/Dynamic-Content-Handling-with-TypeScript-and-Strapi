
// Products.ts
export interface Product {
    id: number;
    title: string;
    content: string;
    author: string;
    createdat: Date;
    images: {
        data: {
            attributes: {
                url: string;
                alt: string;
                caption: string;
            };
        }[];
    };
}
