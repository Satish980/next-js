import Link from "next/link";

export default function ProductsList() {
  return (
    <div>
      <h1>Products List</h1>
      <h1>
        <Link href={"products/1"}>Product 1</Link>
      </h1>
      <h1>
        <Link href={"products/2"}>Product 2</Link>
      </h1>
      <h1>
        <Link href={"products/3"}>Product 3</Link>
      </h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
