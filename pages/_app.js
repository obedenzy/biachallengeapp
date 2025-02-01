import '../styles/globals.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Navbar from '../components/Navbar';

    function MyApp({ Component, pageProps }) {
      return (
        <>
          <Navbar />
          <div className="container mt-4">
            <Component {...pageProps} />
          </div>
        </>
      );
    }

    export default MyApp;
