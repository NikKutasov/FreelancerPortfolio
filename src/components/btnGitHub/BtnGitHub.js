import './style.css'
import gitHubIcon from './gitHub-black.svg'

const BtnGitHub = ({ link }) => {
	return (
		<div className="btn-wrapper">
			<a href={link} target="_blank" rel="norefferer" className="btn-outline">
				<img src={gitHubIcon} alt="" className="gitHubLogo" />
				GitHub repo
			</a>
		</div>
	)
}

export default BtnGitHub
