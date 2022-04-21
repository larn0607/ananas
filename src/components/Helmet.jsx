const Helmet = ({ title, children }) => {
  document.title =  "Ananas - " + title 

  return (
    <>
      {children}
    </>
  )
}

export default Helmet