import Head from "next/head";

export default function HeadPadrao({children}){
    return(
        <Head>
            <title>
                Saude Senior - {children}
            </title>
        </Head>
    )
}