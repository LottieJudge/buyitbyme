// app/layout.js

export default function Layout({ children }) {
  return (
    <html lang="en"> {/* Define the root html tag and its language */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      
      <body> {/* The body tag for your page */}
        <header>
          <h1>My App</h1>
          {/* You can add links or other elements for navigation */}
        </header>

        <main>
          {children} {/* This renders the content of your page, e.g., helloWorld */}
        </main>

        <footer>
          <p>© 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}
