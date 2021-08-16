import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "../src/RelayEnvironment";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainerComponent } from "../src/components/Toast";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../styles/globals.css'


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Component {...pageProps} />
            <ToastContainerComponent />
        </RelayEnvironmentProvider>
    )
}

export default App