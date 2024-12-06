
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Buy it By me</title>
      </head>
      <body> 
        <header>
          <h1>Buy It By Me</h1>
        </header>
        <main>
          {children}
          {/* chidlren - the content etc  */}
        </main>
        <footer>
          <p>a Judge Godfrey production</p>
          <a href="https://www.theguardian.com/technology/2024/sep/26/amazon-uk-pays-corporation-tax-for-first-time-since-2020">
            <p>The need?</p>
          </a>
        </footer>
      </body>
    </html>
  );
}
