
exports.getScriptManifest = () => {
	return {
		name: "Custom websocket events",
		description: "Custom websocket events",
		author: "Syntax_err0r",
		version: "1.0",
		firebotVersion: "5",
	};
};

exports.getDefaultParameters = () => {
	return {
		type: {
			type: "string",
			default: "",
			description: "Type of event (sub,follow...)",
			secondaryDescription: "",
		},
		data: {
			type: "string",
			default: "",
			description: "Data of event",
			secondaryDescription: "",
		},
	};
};

exports.run = (runRequest) => {
	const { logger, httpServer } = runRequest.modules;
	logger.info(runRequest.parameters.message);

	let data = runRequest.parameters;
	httpServer.sendToOverlay("customEvent", data);


};


