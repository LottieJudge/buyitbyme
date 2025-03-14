// components/icons/SearchIcon.jsx

export default function SearchIcon({ className = "w-6 h-6", stroke = "#191265", fill = "white" }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
      >
        <circle
          cx="11"
          cy="11"
          r="7"
          fill={fill}
          stroke={stroke}
          strokeWidth="1.26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="15.95"
          y1="15.95"
          x2="20"
          y2="20"
          stroke={stroke}
          strokeWidth="1.26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  