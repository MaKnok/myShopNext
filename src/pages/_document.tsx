import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
  render() {
    return(
      <Html>
         <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet"/> 
            <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
         </Head>
         <body>
           <Main/>
           <NextScript/>
         </body>  
      </Html>
    );
  }
}