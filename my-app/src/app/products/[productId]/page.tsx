async function page({ params }: { params: Promise<{ productId: string }> }) {
  const productId = (await params).productId;
  return <div>detals about Product of {productId}

  </div>;
}

export default page;
