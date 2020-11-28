export const HamburguerIcon = ({ color = 'black' }) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="2" rx="1" fill={`var(--${color}-color)`} />
    <rect y="6" width="20" height="2" rx="1" fill={`var(--${color}-color)`} />
    <rect
      x="7"
      y="12"
      width="13"
      height="2"
      rx="1"
      fill={`var(--${color}-color)`}
    />
  </svg>
)
