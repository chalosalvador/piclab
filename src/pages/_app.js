import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="font-inter flex flex-col min-h-screen bg-main sm:before:blurred-ellipse">
      <main className="md:pt-8 2xl:container xl:mx-auto w-full relative flex-grow mx-auto overflow-x-hidden 2xl:before:border-shadow-l 2xl:after:border-shadow-r">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
