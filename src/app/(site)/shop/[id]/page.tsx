import { notFound } from 'next/navigation';
import { getProductById } from '@/data/products-catalog';

interface Props {
    params: Promise<{ id: string }>;
}

async function ProductDetailsPage({ params }: Props) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
        </div>
    );
}

export default ProductDetailsPage;