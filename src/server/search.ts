export interface SearchResultItem {
    title: string;
    post: string;
    episode: number;
}

export interface Query {
    title: string;
    sort: string;
    year: string;
    subtype: string[];
    offset: number;
    pageSize: number;
}

export function searchServer(query: Query): Promise<SearchResultItem[]> {
    return new Promise((resolve, reject) => {
            fetch("/api/search",
                {
                    body: JSON.stringify(query),
                    method: "POST"
                })
                .then(res => res.json())
                .then(resolve, reject);
        }
    );
}