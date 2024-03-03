import { notFound } from "next/navigation";
export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if(+params.reviewId > 1000){
    notFound();
  }
  return <h1>Review {params.reviewId} about product {params.productId}</h1>;
}
