// app/layout.js

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      
      <body> 
        <header>
          <h1>Buy It By Me</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>a Judge Godfrey production</p>
        </footer>
      </body>
    </html>
  );
}
