const Section = props => (
  <div className="section">
    {props.children}
  </div>
)

export const SectionTitle = props => (
  <div className="section__title">
    {props.children}
  </div>
)

export const SectionBody = props => (
  <div className="section__body">
    {props.children}
  </div>
)

export default Section