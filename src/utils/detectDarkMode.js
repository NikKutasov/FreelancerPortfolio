const detectDarkMode = () => {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
		return 'dark'
	}
	return 'light'
}
export default detectDarkMode
