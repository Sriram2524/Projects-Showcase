import './index.css'

const ProjectItem = props => {
  const {eachProjectItem} = props
  const {name, imageUrl} = eachProjectItem

  return (
    <li className="list">
      <img alt={name} src={imageUrl} />
      <p className="name">{name}</p>
    </li>
  )
}
export default ProjectItem
