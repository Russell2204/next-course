import { notFound } from "next/navigation";

type ReviewDetailsProps = {
    params: {
        productId: string,
        reviewId: string,
    }
}


export default function ReviewDetail({ params }: ReviewDetailsProps) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <>
            <h1>Review {params.reviewId} for Product { params.productId}</h1>
        </>
    )
}