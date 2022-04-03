export default function Skull({ className }: { className?: string }) {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_11_240)">
        <path
          d="M-3.90613e-06 6.70297C-3.90613e-06 6.37269 0.0316836 6.04972 0.0950586 5.73163L3.27478 8.5506L6.75918 4.68472L3.64893 1.91694C4.07874 1.79708 4.52264 1.73519 4.96884 1.73291C6.28027 1.73351 7.53836 2.25216 8.46921 3.17593C9.40006 4.09971 9.92829 5.35381 9.9389 6.66519V6.70297C9.9389 6.95038 9.9194 7.19779 9.88162 7.433L13.7597 10.8674C12.3487 11.956 11.2243 13.372 10.4837 14.9929L6.46546 11.4317C5.98284 11.5902 5.47462 11.673 4.96762 11.673C3.65007 11.6711 2.38704 11.1469 1.45539 10.2152C0.523744 9.28355 -0.00050715 8.02052 -0.00244141 6.70297H-3.90613e-06ZM34.0299 27.3267C33.5351 27.3267 33.0525 27.4034 32.6016 27.5363L28.8502 24.2164C28.2337 25.8998 27.2188 27.4089 25.8923 28.6149L29.1354 31.4838C29.0879 31.7523 29.0622 32.0241 29.0587 32.2967C29.0647 35.6227 32.2701 38.0102 35.4571 37.0572L32.2201 34.1821L35.6984 30.3418L38.9171 33.1986C38.971 32.901 38.9987 32.5992 39 32.2967V32.2589C38.9891 30.9477 38.4607 29.6937 37.53 28.77C36.5992 27.8463 35.3413 27.3276 34.0299 27.3267ZM28.5139 14.9929L32.5321 11.4317C33.0156 11.5904 33.5211 11.6719 34.0299 11.673C37.1597 11.6669 39.5082 8.8041 38.9049 5.73772L35.7252 8.55669L32.2408 4.68472L35.3511 1.91694C34.9215 1.79587 34.4774 1.73396 34.0312 1.73291C32.7196 1.73638 31.4622 2.25679 30.5318 3.18127C29.6014 4.10574 29.073 5.35974 29.0611 6.67129V6.70297C29.0611 6.95038 29.0806 7.19779 29.1184 7.433L25.2403 10.8674C26.65 11.9573 27.7741 13.373 28.5163 14.9929H28.5139ZM10.1497 24.2164L6.39843 27.5363C3.22481 26.5844 0.0255898 28.9452 -3.90613e-06 32.2589V32.2967C-3.90613e-06 32.6075 0.0316836 32.9061 0.0828711 33.1986L3.30768 30.3418L6.786 34.1821L3.5429 37.0572C6.72993 38.009 9.93525 35.6227 9.94134 32.2967C9.93842 32.0241 9.91274 31.7522 9.86456 31.4838L13.1077 28.6149C11.781 27.409 10.7661 25.8999 10.1497 24.2164V24.2164ZM24.7236 28.532C24.8802 28.7692 24.9767 29.0409 25.0046 29.3238C25.0326 29.6066 24.9912 29.892 24.884 30.1553C24.7769 30.4185 24.6072 30.6517 24.3896 30.8346C24.172 31.0175 23.9132 31.1446 23.6354 31.2049C23.3577 31.2652 23.0694 31.257 22.7956 31.1808C22.5218 31.1046 22.2706 30.9629 22.0639 30.7678C21.8572 30.5728 21.7011 30.3302 21.6092 30.0613C21.5173 29.7923 21.4924 29.505 21.5365 29.2243H21.2257C21.3903 30.2846 20.5725 31.2364 19.4988 31.2364C18.4251 31.2364 17.6073 30.2846 17.7718 29.2243H17.5244C17.557 29.476 17.5358 29.7318 17.4622 29.9747C17.3886 30.2176 17.2643 30.4422 17.0975 30.6335C16.9307 30.8249 16.7252 30.9786 16.4946 31.0847C16.264 31.1907 16.0135 31.2466 15.7597 31.2486C14.7822 31.2486 13.9827 30.4357 13.9827 29.4327C13.9827 29.0963 14.0778 28.7794 14.2362 28.5064C11.8109 26.6527 10.218 23.5485 10.218 20.0324C10.218 14.3518 14.3752 9.74254 19.4988 9.74254C24.6273 9.74254 28.7857 14.3506 28.7857 20.0324C28.7857 23.568 27.1732 26.6844 24.7297 28.5381L24.7236 28.532ZM17.9132 18.9222C17.6899 18.5044 17.3804 18.1388 17.0052 17.8497C16.5549 17.577 16.0398 17.4302 15.5135 17.4243C15.3355 17.4243 15.1649 17.4438 14.9931 17.4816C14.3325 17.5645 13.7804 18.0154 13.3928 18.5358C13.0565 18.949 12.7957 19.456 12.7896 20.002C12.7384 20.459 12.8273 20.9099 12.9102 21.3475C13.0187 21.874 13.3867 22.2993 13.8048 22.604C13.9949 22.7624 14.274 22.9721 14.5226 22.7941C14.6811 22.5784 14.5482 22.2603 14.6945 22.0202C14.7226 21.9066 14.7745 21.8003 14.8467 21.7083C14.919 21.6163 15.01 21.5406 15.1137 21.4864C15.5391 21.2768 15.9705 21.0611 16.4275 20.9087C16.7956 20.8003 17.1003 20.5528 17.4184 20.3432C17.8315 20.0263 18.1106 19.4353 17.9132 18.9209V18.9222ZM19.5317 22.7052C19.0747 22.693 18.5031 24.7112 18.5981 25.5936C18.8772 26.7685 18.9796 24.7746 19.5317 24.7746C20.0521 24.7941 19.9765 26.8123 20.3885 25.5936C20.5152 24.7807 20.0265 22.7186 19.5317 22.7052ZM26.0886 21.3475C26.1714 20.9099 26.2604 20.459 26.2092 20.002C26.2031 19.456 25.9423 18.9478 25.6059 18.5358C25.2184 18.0154 24.6663 17.5645 24.0057 17.4816C23.8349 17.4436 23.6603 17.4244 23.4853 17.4243C22.971 17.4243 22.4445 17.5828 21.9936 17.8497C21.6173 18.1377 21.3076 18.5035 21.0856 18.9222C20.8894 19.4365 21.1685 20.0264 21.5804 20.3444C21.8973 20.5541 22.202 20.8015 22.5712 20.916C23.0283 21.0623 23.4597 21.278 23.8851 21.4876C24.0947 21.5961 24.247 21.7923 24.3043 22.0214C24.4506 22.2567 24.3165 22.5796 24.4762 22.7953C24.7236 22.9733 25.0027 22.7637 25.194 22.6052C25.6132 22.3005 25.9813 21.8752 26.0886 21.3487V21.3475Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_240">
          <rect width="39" height="39" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
