export default function ProductDetails( {params}: {
    params: {productId: String}
    
}){
    return(
        <h2>Details about product {params.productId}</h2>
    );
}