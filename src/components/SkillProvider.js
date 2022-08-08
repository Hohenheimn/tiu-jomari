import React, {createContext} from 'react'

export const SkillContext = createContext();

export const SkillProvider = ({children}) => {

	const SkillSet = [
		{
			type: "frontend", name: "HTML", image: "html.png"
		},
		{
			type: "frontend", name: "CSS", image: "css.png"
		},
		{
			type: "frontend", name: "JAVASCRIPT", image: "javascript.png"
		},
		{
			type: "frontend", name: "SASS", image: "sass.png"
		},
		{
			type: "frontend", name: "TAILWIND CSS", image: "tailwind.png"
		},
		{
			type: "frontend", name: "REACT JS", image: "react.png"
		},
		{
			type: "backend", name: "PHP", image: "php.png"
		},
		{
			type: "backend", name: "WORDPRESS", image: "wordpress.png"
		},
		{
			type: "backend", name: "MySQL", image: "mysql.png"
		},
	]
	return (
		<SkillContext.Provider value = {{ SkillSet }}>
			{children}
		</SkillContext.Provider>
	)
}
