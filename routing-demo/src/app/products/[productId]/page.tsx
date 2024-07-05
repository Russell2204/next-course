type ProductDetailsProps = {
    params: { productId: string }
}

export default function ProductDetails({params} : ProductDetailsProps) {
    return  (
        <>
            <h1>Products Details: {params.productId}</h1>
        </>
    )
}