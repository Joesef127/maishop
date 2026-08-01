import ProductDetailsPage from "@/pages/products-details-page";

interface Props {
    params: Promise<{ id: string }>;
}

async function ProductDetails({ params }: Props) {
    const { id } = await params;

    return <ProductDetailsPage params={{ id }} />;
}

export default ProductDetails;