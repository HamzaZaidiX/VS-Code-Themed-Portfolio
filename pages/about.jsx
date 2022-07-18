const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p className="about">
        Hello My Name is Hamza Jaffar Zaidi a Certified Web Developer & Designer
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
