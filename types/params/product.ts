type ProductCountParams = {
    vendor: string;
    product_type: string;
    collection_id: number;
    created_at_min: string;
    created_at_max: string;
    updated_at_min: string;
    updated_at_max: string;
    published_at_min: string;
    published_at_max: string;
    published_status: "published" | "unpublished" | "any" ;
}

type ProductListParams = ProductCountParams & {
    ids: number[],
    fields: string[],
    presentment_currencies: string[],
    handle: string,
    title: string,
    since_id: number,
    limit: number
}

type ScriptTagListParams = {
    since_id: number,
    limit: number,
    created_at_min: string;
    created_at_max: string;
    updated_at_min: string;
    updated_at_max: string;
    fields: string[],
    src: string
}

type ScriptTagListCountParams = {
    src: string
}

type ScriptTagListSingleParams = {
    fields: string[],
}
