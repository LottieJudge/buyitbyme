export default function AvatarIcon({ className = "w-6 h-6" }) {
    return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 192"
          fill="currentColor"
        >
          <path
            fill="#2F4156"
            d="M179.29 97.56c-3.72 19.11-13.68 36.71-27.38 50.67-18.35 18.71-43.38 30.87-69.07 31.35-27.09.5-49.07-11.8-61.26-31.25-9.24-14.7-12.87-33.49-8.89-53.92C21.4 49.66 64.4 13.17 109.28 12.42c36.15-.6 63.16 21.6 69.94 53.13l.05.26c1.56 7.12 2.01 14.62 1.32 22.26-.26 3.12-.69 6.29-1.31 9.49Z"
          />
          <path
            fill="#F5EFEB"
            d="M151.9 148.23c-18.35 18.71-43.38 30.87-69.07 31.35-27.09.5-49.07-11.8-61.26-31.25 8.89-13.73 21.55-25.08 36.06-32.4 5.04-2.55 10.31-4.6 15.71-6.09 2.68-.75 5.4-1.36 8.13-1.82 3.84-.65 7.73-1 11.64-1.05.31-.01.62-.01.93-.01s.62 0 .93.01c3.89.05 7.65.4 11.26 1.05 2.57.46 5.07 1.07 7.49 1.82 4.88 1.49 9.41 3.55 13.56 6.09 5.35 3.28 10.04 7.37 13.95 12.12 4.79 5.82 8.42 12.64 10.66 20.18Z"
          />
          <ellipse
            fill="#F5EFEB"
            cx="101.89"
            cy="62.5"
            rx="29.55"
            ry="24.78"
            transform="rotate(-42.48 101.89 62.5)"
          />
          <path
            fill="#F5EFEB"
            d="M113.73 109.84c-5.93 5.55-13.76 9.05-21.79 9.05s-14.62-3.5-18.59-9.05c2.68-.75 5.4-1.36 8.13-1.82 3.84-.65 7.73-1 11.64-1.05.31-.01.62-.01.93-.01s.62 0 .93.01c3.89.05 7.65.4 11.26 1.05 2.57.46 5.07 1.07 7.49 1.82Z"
          />
        </svg>
      );
    }