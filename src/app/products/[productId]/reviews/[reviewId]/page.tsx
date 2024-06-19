export default function ReviewProductDetails( {params}: {
    params: {reviewId: String}

}){
    return(
        <h2>Review of Product {params.reviewId}</h2>
    );
}