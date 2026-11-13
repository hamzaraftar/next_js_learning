import Link from "next/link";

function page() {
  return (
    <div>
      <Link className="" href={"/"}>
        Home
      </Link>
      <h1>Product list</h1>
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
    </div>
  );
}

export default page;
