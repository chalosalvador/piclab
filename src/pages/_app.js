import "../styles/globals.css";
import PropTypes from "prop-types";

function App({ Component, pageProps }) {
  return (
    <div className="font-inter flex flex-col min-h-screen bg-main before:blurred-ellipse">
      <main className="md:pt-8 2xl:container xl:mx-auto w-full relative flex-grow mx-auto overflow-x-hidden 2xl:before:border-shadow-l 2xl:after:border-shadow-r">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
