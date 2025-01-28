"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAllPOIs = exports.getPOIByIdandTeam = exports.getPOIById = exports.deletePOI = exports.createPOI = void 0;
var POIModel_1 = require("../model/POIModel");
var TeamModel_1 = require("../model/TeamModel");
/*
 * Erstellt einen neuen POI
 */
function createPOI(poiData) {
    return __awaiter(this, void 0, Promise, function () {
        var poi, savedPOI;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    poi = new POIModel_1.POI({
                        name: poiData.name,
                        lat: poiData.lat,
                        long: poiData.long,
                        beschreibung: poiData.beschreibung,
                        punkte: poiData.punkte
                    });
                    return [4 /*yield*/, poi.save()];
                case 1:
                    savedPOI = _a.sent();
                    return [2 /*return*/, {
                            id: savedPOI._id.toString(),
                            name: savedPOI.name,
                            lat: savedPOI.lat,
                            long: savedPOI.long,
                            beschreibung: savedPOI.beschreibung,
                            punkte: savedPOI.punkte
                        }];
            }
        });
    });
}
exports.createPOI = createPOI;
/**
 * Löscht einen POI anhand der ID
 */
function deletePOI(id) {
    return __awaiter(this, void 0, Promise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, POIModel_1.POI.findByIdAndDelete(id).exec()];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        throw new Error("POI mit der ID " + id + " konnte nicht gel\u00F6scht werden.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deletePOI = deletePOI;
function getPOIById(id) {
    return __awaiter(this, void 0, Promise, function () {
        var poi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, POIModel_1.POI.findById(id).exec()];
                case 1:
                    poi = _a.sent();
                    if (!poi) {
                        throw new Error("POI mit der ID " + id + " wurde nicht gefunden.");
                    }
                    return [2 /*return*/, {
                            id: poi._id.toString(),
                            name: poi.name,
                            lat: poi.lat,
                            long: poi.long,
                            beschreibung: poi.beschreibung,
                            punkte: poi.punkte
                        }];
            }
        });
    });
}
exports.getPOIById = getPOIById;
//returns both poi and gives points based on first, second, etc.
function getPOIByIdandTeam(id, teamId) {
    return __awaiter(this, void 0, Promise, function () {
        var poi, team, index, poiPoints, numberOfClaim, points;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, POIModel_1.POI.findById(id).exec()];
                case 1:
                    poi = _a.sent();
                    if (!poi) {
                        throw new Error("POI mit der ID " + id + " wurde nicht gefunden.");
                    }
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 2:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team mit der ID " + teamId + " wurde nicht gefunden.");
                    }
                    index = team.poiId.findIndex(function (objectId) { return objectId.toString() === id; });
                    poiPoints = poi.punkte;
                    numberOfClaim = team.poiPoints[index];
                    points = calculatePoints(poiPoints, numberOfClaim);
                    return [2 /*return*/, {
                            id: poi._id.toString(),
                            name: poi.name,
                            lat: poi.lat,
                            long: poi.long,
                            beschreibung: poi.beschreibung,
                            punkte: points
                        }];
            }
        });
    });
}
exports.getPOIByIdandTeam = getPOIByIdandTeam;
function getAllPOIs() {
    return __awaiter(this, void 0, Promise, function () {
        var pois;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, POIModel_1.POI.find().exec()];
                case 1:
                    pois = _a.sent();
                    return [2 /*return*/, pois.map(function (poi) { return ({
                            id: poi._id.toString(),
                            name: poi.name,
                            lat: poi.lat,
                            long: poi.long,
                            beschreibung: poi.beschreibung,
                            punkte: poi.punkte
                        }); })];
            }
        });
    });
}
exports.getAllPOIs = getAllPOIs;
function calculatePoints(poiPoints, numberOfClaim) {
    if (numberOfClaim <= 1) {
        return poiPoints; // Full points for the first claim
    }
    var minPoints = poiPoints * 0.3;
    var decayRate = 0.5;
    var adjustedPoints = poiPoints * Math.pow(decayRate, numberOfClaim - 1);
    return Math.max(adjustedPoints, minPoints);
}
