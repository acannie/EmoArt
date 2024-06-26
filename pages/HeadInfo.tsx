import Head from "next/head";
import React from 'react';

export default function HeadInfo() {
    return (
        <Head>
            <title>EmoArt</title>
            <link rel="icon" href="/EmoArt/favicon.ico" sizes="any" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    );
}
