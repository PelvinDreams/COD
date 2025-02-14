import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageLoader from "@/components/Common/PageLoader"; // Ensure correct import path

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true); // Set initial state to true
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Set loading to false after the first render
    setLoading(false);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    // Set loading to false after the first render
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
