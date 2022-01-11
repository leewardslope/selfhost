import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  title: 'Dev Blogs',
  description: 'The Blogging Platform For Developers',
  keywords: 'dev, blogging, developers, javascript'
};

export default Layout;
