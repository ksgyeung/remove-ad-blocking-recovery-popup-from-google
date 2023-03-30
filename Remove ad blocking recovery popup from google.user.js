// ==UserScript==
// @name         Remove ad blocking recovery popup from google
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       KSG Yeung
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=support.google.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	const mo = new MutationObserver((records) =>
    {
        let nodes;
        nodes = records.flatMap(x => [...x.addedNodes.values()]);
        //console.log(nodes);
        if(nodes.some(x => x.className === 'fc-ab-root'))
        {
            console.log('found fc-ab-root');
            executeFcabroot();
        }
    });

    const executeFcabroot = function()
    {
        // remove enemy to fuck
        document.querySelector('div.fc-ab-root').remove();
        // invisible, but also remove this for your sake
        document.querySelector('div.fc-whitelist-root').remove();
        // restore the scrolling function
        document.body.style.overflow = 'unset';

        // this script is no longer needed at this moment
        mo.disconnect();
    }

	const option = {
		'childList': true,
		'subtree': false,
	};
	mo.observe(document.body, option);
})();