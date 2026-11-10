function ProductDatailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h1 className="text-4xl">featured products</h1>
    </div>
  );
}

export default ProductDatailsLayout;
