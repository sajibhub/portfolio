import { Helmet } from "react-helmet-async";
import SummaryImage from "../assets/images/summary.png"
import { useLocation } from "react-router-dom";

const HelmetSEO = () => {
    const Location = useLocation()
    const Path = Location.pathname === "/" ? "Home" : Location.pathname.replace(/^\/(.)/, (match, p1) => p1.toUpperCase());
    return (
        <>
            <Helmet>
                <title>{` ${Path} | MOHAMMAD SAJIB`}</title>
                <meta name="description" content="MOHAMMAD SAJIB - A skilled full-stack developer specializing in backend development, JavaScript, and React, based in Khagrachari, Bangladesh." />
                <meta name="keywords" content="Mohammad Sajib, Web Developer,SAJIB, Backend Developer, Full-Stack Developer, JavaScript, React, Node.js, Express.js, MongoDB, Khagrachari, MERN Stack,MERN stack developer in Khagrachari" />
                <meta name="author" content="MOHAMMAD SAJIB" />

                <meta property="og:title" content={`${Path} | MOHAMMAD SAJIB`} />
                <meta property="og:description" content="Expert in backend and full-stack development, specializing in JavaScript, React, and Node.js. Based in Khagrachari, Bangladesh." />
                <meta property="og:image" content="../assets/images/profile.png" />
                <meta property="og:url" content="https://sajib.xyz" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content={`${Path} | MOHAMMAD SAJIB`} />
                <meta name="twitter:description" content="Expert in backend and full-stack development, specializing in JavaScript, React, and Node.js. Based in Khagrachari, Bangladesh." />
                <meta name="twitter:image" content="../assets/images/profile.png" />
                <meta name="twitter:card" content={SummaryImage} />

                <link rel="canonical" href="https://sajib.xyz" />
            </Helmet >

        </>
    );
}

export default HelmetSEO