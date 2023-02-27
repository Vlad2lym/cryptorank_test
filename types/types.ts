export interface ICryptocurrency {
    category?: string | undefined, 
    circulatingSupply: number, 
    id: number,
    lastUpdated: string, 
    maxSupply?: number | undefined, 
    name: string, 
    rank: number, 
    slug: string, 
    symbol: string, 
    tokens: any[],
    totalSupply?: number | undefined, 
    type: string, 
    values: { 
        USD: { 
            high24h: number, 
            low24h: number, 
            marketCap: number, 
            percentChange3m?: number, 
            percentChange6m?: number,
            percentChange7d?: number, 
            percentChange24h?: number, 
            percentChange30d?: number, 
            price: number, 
            volume24h: number, 
        }
    }
}

export interface IData {
    data: ICryptocurrency[],
    meta: any,
    status: any,
}