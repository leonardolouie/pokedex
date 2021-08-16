import dynamic from "next/dynamic";

const AuthenticatedRouteDynamic = dynamic(() => import("./index"), {
    ssr: false,
});

export default AuthenticatedRouteDynamic;
