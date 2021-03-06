export default function Book({ className }: { className?: string }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34.8333 3.6665H11C8.789 3.6665 5.5 5.13134 5.5 9.1665V34.8332C5.5 38.8683 8.789 40.3332 11 40.3332H38.5V36.6665H11.022C10.175 36.6445 9.16667 36.3108 9.16667 34.8332C9.16667 34.648 9.18317 34.483 9.21067 34.3327C9.416 33.2767 10.2813 33.0182 11.022 32.9998H38.5V7.33317C38.5 6.36071 38.1137 5.42808 37.4261 4.74045C36.7384 4.05281 35.8058 3.6665 34.8333 3.6665ZM34.8333 20.1665L31.1667 18.3332L27.5 20.1665V7.33317H34.8333V20.1665Z"
        fill="currentColor"
      />
    </svg>
  );
}
