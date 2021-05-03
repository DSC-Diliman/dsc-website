export default function Footer({ children }) {
  return (
    <footer className="flex flex-col content-center space-y-2 py-6 md:py-10 text-xs md:text-sm text-center">
      <div className="flex-initial flex flex-col items-center">
        <img
          src="/images/dsc-upd-logo-small.png"
          alt="Developer Student Clubs UP Diliman Logo"
        />
      </div>
      <p>2020 Developer Student Clubs UP Diliman. All Rights Reserved.</p>
      {children}
    </footer>
  )
}
