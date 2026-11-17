
function AboutPage() {
  console.log("server side rendering");

  return <div>About Page {new Date().toLocaleTimeString()}</div>;
}

export default AboutPage;
