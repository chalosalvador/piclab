import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="font-inter flex flex-col min-h-screen bg-main sm:before:blurred-ellipse">
      <main className="md:py-8 xl:container xl:mx-auto w-full relative flex-grow mx-auto overflow-x-hidden">
        <Component {...pageProps} />
      </main>

      <footer className="flex relative justify-center items-center w-full h-24 border-t">
        <a
          className="flex justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
}

export default App;
