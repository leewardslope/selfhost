import Layout from '../components/common/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-7xl font-bold capitalize">
                <span className="block">The blogging platform</span>
                <span className="block">for developers</span>
              </h1>
              <h2 className="text-4xl sm:text-2xl">
                Start your developer blog, share ideas, and connect with the dev community
              </h2>
            </div>
            <button className="btn btn-primary m-6">Start your blog for free</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
