export default function ReviewProductDetails( {params}: {
    params: {
        productId: String;
        reviewId: String;
    };

}){
    return(
        <h2>Review {params.reviewId} of Product {params.productId}</h2>
    );
}