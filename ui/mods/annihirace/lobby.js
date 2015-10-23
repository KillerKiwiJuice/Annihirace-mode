function annihiraceMode() {
	var tick1 = '<br />' +
				'<label data-placement="right" data-bind="css:{label_disabled: !model.canChangeSettings()}, click: toggleEnableNuke, tooltip: \'Allow players to build nukes\'">' +
					'<input type="checkbox" style="pointer-events: none !important;" data-bind="checked: nukeEnabled, enable: canChangeSettings"/>' +
					'<loc>Enable Nuke</loc>' +
				'</label>' +
				'<br />';
	var tick2 = '<label data-placement="right" data-bind="css:{label_disabled: !model.canChangeSettings()}, click: toggleEnableOrbital, tooltip: \'Allow players to build an orbital launcher\'">' +
					'<input type="checkbox" style="pointer-events: none !important;" data-bind="checked: orbitalEnabled, enable: canChangeSettings"/>' +
					'<loc>Enable Orbital</loc>' +
				'</label>' +
				'<br />';
	var tick3 = '<label data-placement="right" data-bind="css:{label_disabled: !model.canChangeSettings()}, click: toggleEnableT2Air, tooltip: \'Allow players to build interplanetary fighters\'">' +
					'<input type="checkbox" style="pointer-events: none !important;" data-bind="checked: t2AirEnabled, enable: canChangeSettings"/>' +
					'<loc>Enable T2 Fighter</loc>' +
				'</label>' +
				'<br />';

	$(".section .game_mode").append(tick1);
	$(".section .game_mode").append(tick2);
	$(".section .game_mode").append(tick3);

	model.nukeEnabled = ko.observable(false);
	model.t2AirEnabled = ko.observable(false);
	model.orbitalEnabled = ko.observable(false);

	model.toggleEnableNuke = function() {
		model.nukeEnabled( !model.nukeEnabled() );
		localStorage.setItem( 'nukeEnabled', encode( model.nukeEnabled() ) );
	}
	model.toggleEnableT2Air = function() {
		model.t2AirEnabled( !model.t2AirEnabled() );
		localStorage.setItem( 't2AirEnabled', encode( model.t2AirEnabled() ));
	}
	model.toggleEnableOrbital = function() {
		model.orbitalEnabled( !model.orbitalEnabled() );
		localStorage.setItem( 'orbitalEnabled', encode( model.orbitalEnabled() ));
	}

	console.log("Annihilaser Race mod running successfully");
};
annihiraceMode();