import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document{
        render() {
            return (
                <Html lang="en">    
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>        
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,400&family=Square+Peg&display=swap" rel="stylesheet"/>
                    
                </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
        )
    }
}