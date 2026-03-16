export default function MetaIcon({ name }) {
  if (name === "time") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 6.8v5.6l4 2.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M12 22s7-5.4 7-12.2A7 7 0 0 0 5 9.8C5 16.6 12 22 12 22z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.2a2.4 2.4 0 1 0-2.4-2.4 2.4 2.4 0 0 0 2.4 2.4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return null;
}

