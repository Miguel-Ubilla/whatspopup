// on success
function onCreated(windowInfo) {
	console.log(`Created window: ${windowInfo.id}`);
}

// on error
function onError(error) {
	console.log(`error: ${error}`);
}


window.browser.browserAction.onClicked.addListener((tab) => {

	const popupWapp = window.browser.windows.create({
	                url: ['https://web.whatsapp.com/'],
	                type: "popup",
	                width: 800,
	                height: 600,
	                titlePreface: 'WhatsPopUp for ',
	                focused: true,
	            });

	  	popupWapp.then(onCreated, onError);
});

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create