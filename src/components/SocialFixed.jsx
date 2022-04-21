import socials from '../data/socialData'

const SocialFixed = () => {
  return (
    <div className="social-fixed">
      {socials.map((social, i) => (
        <a href={social.path} target="_blank" key={i} rel="noreferrer">
          <img src={social.display} alt="" />
        </a>
      ))}
    </div>
  )
}

export default SocialFixed
