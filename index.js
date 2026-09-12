(function() {
	var CONFIG = { MOD_NAME: "Korean Transit Pack" };
	function waitForAPI() {
		return new Promise((resolve) => {
			function check() {
				if (window.SubwayBuilderAPI) resolve(window.SubwayBuilderAPI);
				else setTimeout(check, 500);
			}
			check();
		});
	}
	async function initMod() {
		try {
			const API = await waitForAPI();
			console.log(`[${CONFIG.MOD_NAME}] Subway Builder API is ready:`, API.version);
			API.trains.registerTrainType({
				id: "kr-gtx",
				name: "[KR] GTX",
				description: "Korean Style High-speed Heavy Metro System(based on GTX-A)",
				stats: {
					maxSpeed: 50,
					maxSpeedLocalStation: 22.2222,
					maxAcceleration: .6944,
					maxDeceleration: .8333,
					maxLateralAcceleration: 1.5625,
					capacityPerCar: 173,
					carLength: 20,
					trainWidth: 3.15,
					minCars: 8,
					maxCars: 8,
					carsPerCarSet: 8,
					minStationLength: 165,
					maxStationLength: 205,
					stopTimeSeconds: 30,
					carCost: 1933333,
					baseTrackCost: 42329,
					baseStationCost: 24112e3,
					scissorsCrossoverCost: 4e7,
					trainOperationalCostPerHour: 163,
					carOperationalCostPerHour: 67,
					trackMaintenanceCostPerMeter: 439,
					stationMaintenanceCostPerYear: 571,
					parallelTrackSpacing: 4.3,
					trackClearance: 2.5,
					maxSlopePercentage: 3.5,
					minTurnRadius: 100,
					minStationTurnRadius: 600
				},
				compatibleTrackTypes: ["standard"],
				allowAtGradeRoadCrossing: false,
				elevationMultipliers: {
					DEEP_BORE: 1,
					STANDARD_TUNNEL: 9,
					CUT_AND_COVER: 9,
					AT_GRADE: 9,
					ELEVATED: 9
				},
				appearance: { color: "#800080" }
			});
			API.trains.registerTrainType({
				id: "kr-heavy-metro",
				name: "[KR] Heavy Metro",
				description: "Korean Style Heavy Metro System(based on Seoul Line 1)",
				stats: {
					maxSpeed: 30.5555,
					maxSpeedLocalStation: 16.6666,
					maxAcceleration: .8333,
					maxDeceleration: .9722,
					maxLateralAcceleration: 1.5,
					capacityPerCar: 160,
					carLength: 19.5,
					trainWidth: 3.12,
					minCars: 4,
					maxCars: 10,
					carsPerCarSet: 2,
					minStationLength: 85,
					maxStationLength: 210,
					stopTimeSeconds: 30,
					carCost: 1133333,
					baseTrackCost: 24534,
					baseStationCost: 9309983,
					scissorsCrossoverCost: 4e7,
					trainOperationalCostPerHour: 130,
					carOperationalCostPerHour: 89,
					trackMaintenanceCostPerMeter: 375,
					stationMaintenanceCostPerYear: 487,
					parallelTrackSpacing: 4,
					trackClearance: 2,
					maxSlopePercentage: 3.5,
					minTurnRadius: 100,
					minStationTurnRadius: 300
				},
				compatibleTrackTypes: ["standard"],
				allowAtGradeRoadCrossing: false,
				elevationMultipliers: {
					DEEP_BORE: 3,
					STANDARD_TUNNEL: 1.4,
					CUT_AND_COVER: 1,
					AT_GRADE: .55,
					ELEVATED: 1.6
				},
				appearance: { color: "#0052A4" }
			});
			API.trains.registerTrainType({
				id: "kr-light-metro",
				name: "[KR] Light Rail Transit",
				description: "Korean Style LRT System(based on Incheon Line 2)",
				stats: {
					maxSpeed: 22.2222,
					maxSpeedLocalStation: 11.1111,
					maxAcceleration: 1.1,
					maxDeceleration: 1.1,
					maxLateralAcceleration: 1.646,
					capacityPerCar: 103,
					carLength: 16.35,
					trainWidth: 2.65,
					minCars: 2,
					maxCars: 6,
					carsPerCarSet: 2,
					minStationLength: 35,
					maxStationLength: 100,
					stopTimeSeconds: 30,
					carCost: 1666666,
					baseTrackCost: 23074,
					baseStationCost: 11305326,
					scissorsCrossoverCost: 26666666,
					trainOperationalCostPerHour: 191,
					carOperationalCostPerHour: 42,
					trackMaintenanceCostPerMeter: 366,
					stationMaintenanceCostPerYear: 476,
					parallelTrackSpacing: 3.5,
					trackClearance: 1.5,
					maxSlopePercentage: 3.5,
					minTurnRadius: 100,
					minStationTurnRadius: 100
				},
				compatibleTrackTypes: ["standard"],
				allowAtGradeRoadCrossing: false,
				elevationMultipliers: {
					DEEP_BORE: 3,
					STANDARD_TUNNEL: 1.4,
					CUT_AND_COVER: 1,
					AT_GRADE: .55,
					ELEVATED: 1.6
				},
				appearance: { color: "#BDB017" }
			});
			API.trains.registerTrainType({
				id: "kr-tram",
				name: "[KR] Tram",
				description: "Korean Style Tram System(based on Seoul Wirye Line)",
				stats: {
					maxSpeed: 16.6666,
					maxSpeedLocalStation: 8.3333,
					maxAcceleration: 1.2,
					maxDeceleration: 1.4,
					maxLateralAcceleration: 2,
					capacityPerCar: 49,
					carLength: 7,
					trainWidth: 2.6,
					minCars: 5,
					maxCars: 10,
					carsPerCarSet: 5,
					minStationLength: 40,
					maxStationLength: 80,
					stopTimeSeconds: 20,
					carCost: 939253,
					baseTrackCost: 1542,
					baseStationCost: 70033,
					scissorsCrossoverCost: 17355333,
					trainOperationalCostPerHour: 153,
					carOperationalCostPerHour: 28,
					trackMaintenanceCostPerMeter: 137,
					stationMaintenanceCostPerYear: 178,
					parallelTrackSpacing: 3.25,
					trackClearance: 1,
					maxSlopePercentage: 6,
					minTurnRadius: 25,
					minStationTurnRadius: 80
				},
				compatibleTrackTypes: ["tram"],
				allowAtGradeRoadCrossing: true,
				elevationMultipliers: {
					DEEP_BORE: 3,
					STANDARD_TUNNEL: 1.4,
					CUT_AND_COVER: 1,
					AT_GRADE: .55,
					ELEVATED: 1.6
				},
				appearance: { color: "#FF4500" }
			});
			API.trains.registerTrainType({
				id: "kr-brt",
				name: "[KR] BRT",
				description: "Korean Style BRT System(based on Sejong BRT)",
				stats: {
					maxSpeed: 16.6666,
					maxSpeedLocalStation: 8.3333,
					maxAcceleration: 1.2,
					maxDeceleration: 1.5,
					maxLateralAcceleration: 2,
					capacityPerCar: 43,
					carLength: 9.1,
					trainWidth: 2.5,
					minCars: 2,
					maxCars: 2,
					carsPerCarSet: 2,
					minStationLength: 20,
					maxStationLength: 40,
					stopTimeSeconds: 20,
					carCost: 593333,
					baseTrackCost: 1374,
					baseStationCost: 6666666,
					scissorsCrossoverCost: 1e6,
					trainOperationalCostPerHour: 15,
					carOperationalCostPerHour: 15,
					trackMaintenanceCostPerMeter: 100,
					stationMaintenanceCostPerYear: 130,
					parallelTrackSpacing: 1,
					trackClearance: .5,
					maxSlopePercentage: 8,
					minTurnRadius: 15,
					minStationTurnRadius: 25
				},
				compatibleTrackTypes: ["brt"],
				allowAtGradeRoadCrossing: true,
				elevationMultipliers: {
					DEEP_BORE: 24,
					STANDARD_TUNNEL: 5.3,
					CUT_AND_COVER: 2.6,
					AT_GRADE: 1,
					ELEVATED: 3.3
				},
				appearance: { color: "#77AF9C" }
			});
			API.ui.showNotification(`${CONFIG.MOD_NAME} loaded successfully!`, "success");
		} catch (error) {
			console.error(`[${CONFIG.MOD_NAME}] Mod init error:`, error);
		}
	}
	console.log(`[${CONFIG.MOD_NAME}] Trains mod loading...`);
	setTimeout(() => {
		initMod();
	}, 100);
})();
