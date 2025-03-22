// components/icons/EarthIcon.jsx

export default function EarthIcon({ className = "w-6 h-6" }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 192"
        className={className}
      >
        <defs>
          <clipPath id="clippath">
            <ellipse
              cx="111.01"
              cy="63.91"
              rx="57.84"
              ry="48.5"
              transform="translate(-14.02 91.74) rotate(-42.48)"
              fill="#2F4156"
              strokeWidth="2"
            />
          </clipPath>
        </defs>
  
        <ellipse
          cx="111.01"
          cy="63.91"
          rx="57.84"
          ry="48.5"
          transform="translate(-14.02 91.74) rotate(-42.48)"
          fill="#2F4156"
        />
  
        <g clipPath="url(#clippath)">
          <path
            d="M106.67,44.36c-1.51-3.23-.14-7.81,2.59-11.07..."
            fill="#F5EFEB"
            strokeWidth="2"
          />
          <path
            d="M41.06,32.4c-.34-.15-.73-.28-1.17-.38..."
            fill="#F5EFEB"
            strokeWidth="2"
          />
          <path
            d="M166.48,87.31c-.83-1.88-.44-4.39.98-6.32..."
            fill="none"
            stroke="#020202"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
  
        <path
          d="M144.31,130.67l4.92-20.8c.52-3.63..."
          fill="#C8D9E6"
          strokeWidth="2"
        />
        <path
          d="M132.21,129.72c4.2-3.13,9.62-2.7..."
          fill="none"
          stroke="#020202"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M54.06,130.67l2.41-20.8c.76-3.63..."
          fill="#C8D9E6"
          strokeWidth="2"
        />
        <path
          d="M66.5,129.72c-3.1-3.13-8.67-2.7..."
          fill="none"
          stroke="#020202"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }
  