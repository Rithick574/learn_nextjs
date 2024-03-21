export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return (
    <>
      <h1> Details about the product {params.productid} </h1>
    </>
  );
}
