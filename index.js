exports.decorateConfig = (config) => {

	// get vibrancy setting from config or make blank
	const vibrance = config.hyperVibrance || {};

	exports.onWindow = (browserWindow) => {
		// if there is a vibrancy setting set it
		browserWindow.setVibrancy(vibrance.hasOwnProperty('vibrancy') ? vibrance.vibrancy : '');
	};

	return config;
}
