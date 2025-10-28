import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
     Because every worker deserves
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'>  to be heard, safely and without barriers.</span>
    </h1>
    <p className='desc text-center'>
      
    </p>

    <Feed />
  </section>
);

export default Home;
