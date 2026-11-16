async function page() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("intentional delay");
    }, 7000),
  );
  return <div>blog</div>;
}

export default page;
