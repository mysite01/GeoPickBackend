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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getTeamByPlayerId = exports.getTeam = exports.getTeamsByQACode = exports.updateDeletePlayerInTeam = exports.updateTeamPoiPoints = exports.updateTeamPOIs = exports.updateTeam = exports.getPlayerInTeam = exports.deleteTeam = exports.createTeam = void 0;
var mongoose_1 = require("mongoose");
var TeamModel_1 = require("../model/TeamModel");
var Qacodegenerate_1 = require("../utils/Qacodegenerate");
var mongodb_1 = require("mongodb");
/**
 * Erstellt ein neues Team
 */
function createTeam(teamResource, nameOfTeam, codeInvite) {
    return __awaiter(this, void 0, Promise, function () {
        var uniqueCode, qrCodeDataUrl, shareUrl, existingTeam, qaCode, team, savedTeam, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    uniqueCode = "";
                    qrCodeDataUrl = "";
                    shareUrl = "";
                    if (!codeInvite) return [3 /*break*/, 2];
                    return [4 /*yield*/, TeamModel_1.Team.findOne({ codeInvite: codeInvite })];
                case 1:
                    existingTeam = _a.sent();
                    if (existingTeam) {
                        qrCodeDataUrl = existingTeam.qaCode;
                        shareUrl = existingTeam.shareUrl || '';
                        uniqueCode = codeInvite;
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, Qacodegenerate_1.generateQAcode()];
                case 3:
                    qaCode = _a.sent();
                    if (typeof qaCode === 'object' && qaCode !== null) {
                        uniqueCode = qaCode.uniqueCode;
                        qrCodeDataUrl = qaCode.qrCodeDataUrl;
                        shareUrl = qaCode.shareUrl;
                    }
                    else {
                        throw new Error("Ungültige Antwort von generateQAcode");
                    }
                    _a.label = 4;
                case 4:
                    team = new TeamModel_1.Team({
                        name: nameOfTeam,
                        players: teamResource.playersID.map(function (playerId) { return new mongoose_1.Types.ObjectId(playerId); }),
                        codeInvite: uniqueCode,
                        qaCode: qrCodeDataUrl,
                        shareUrl: shareUrl
                    });
                    return [4 /*yield*/, team.save()];
                case 5:
                    savedTeam = _a.sent();
                    // Gib das gespeicherte Team als Antwort zurück
                    return [2 /*return*/, {
                            id: savedTeam.id.toString(),
                            name: savedTeam.name,
                            poiId: savedTeam.poiId.map(function (poiId) { return poiId.toString(); }),
                            poiPoints: team.poiPoints,
                            playersID: savedTeam.players.map(function (playerId) { return playerId.toString(); }),
                            codeInvite: savedTeam.codeInvite,
                            qaCode: savedTeam.qaCode,
                            shareUrl: savedTeam.shareUrl
                        }];
                case 6:
                    error_1 = _a.sent();
                    console.error("Fehler beim Erstellen des Teams:", error_1);
                    throw new Error("Fehler beim Erstellen des Teams");
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.createTeam = createTeam;
/**
 * Löscht ein Team anhand der ID
 */
function deleteTeam(id) {
    return __awaiter(this, void 0, Promise, function () {
        var query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TeamModel_1.Team.findByIdAndDelete(id).exec()];
                case 1:
                    query = _a.sent();
                    if (!query) {
                        throw new Error("Das Team konnte nicht gelöscht werden!");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTeam = deleteTeam;
/**
 * Holt alle Spieler in einem Team anhand der Team-ID
 */
function getPlayerInTeam(teamId) {
    return __awaiter(this, void 0, Promise, function () {
        var team, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team nicht gefunden"); // Erwartete Fehlermeldung
                    }
                    return [2 /*return*/, team.players.map(function (playerId) { return playerId.toString(); })];
                case 2:
                    error_2 = _a.sent();
                    throw new Error("Fehler beim Abrufen der Spieler im Team");
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPlayerInTeam = getPlayerInTeam;
/**
 * update Teamplayers anhand der Team-ID
 */
function updateTeam(teamId, updatedData) {
    return __awaiter(this, void 0, Promise, function () {
        var team, uniquePlayers, updatedTeam, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team nicht gefunden");
                    }
                    uniquePlayers = Array.from(new Set(__spreadArrays(team.players, updatedData.players)));
                    team.players = uniquePlayers;
                    return [4 /*yield*/, team.save()];
                case 2:
                    updatedTeam = _a.sent();
                    return [2 /*return*/, updatedTeam];
                case 3:
                    error_3 = _a.sent();
                    throw new Error("Fehler beim Update der Spieler im Team");
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateTeam = updateTeam;
/**
 * Update POIs in a team based on the team ID
 */
function updateTeamPOIs(teamId, updatedPOIs) {
    return __awaiter(this, void 0, Promise, function () {
        var team, currentPOIs, updatedPOIsIds, uniquePOIs, updatedTeam, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team nicht gefunden");
                    }
                    currentPOIs = team.poiId.map(function (poi) { return poi.toString(); });
                    updatedPOIsIds = updatedPOIs.poiId.map(function (poi) { return new mongodb_1.ObjectId(poi).toString(); });
                    uniquePOIs = Array.from(new Set(__spreadArrays(currentPOIs, updatedPOIsIds)));
                    // Convert back to ObjectId for MongoDB
                    team.poiId = uniquePOIs.map(function (poi) { return new mongodb_1.ObjectId(poi); });
                    return [4 /*yield*/, team.save()];
                case 2:
                    updatedTeam = _a.sent();
                    return [2 /*return*/, updatedTeam];
                case 3:
                    error_4 = _a.sent();
                    throw new Error("Fehler beim Update der POIs im Team: " + error_4);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateTeamPOIs = updateTeamPOIs;
function updateTeamPoiPoints(teamId, updatedPoiPoints) {
    return __awaiter(this, void 0, Promise, function () {
        var team, updatedPoiPointsArray, updatedTeam, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team nicht gefunden");
                    }
                    updatedPoiPointsArray = updatedPoiPoints.poiPoints;
                    team.poiPoints = updatedPoiPointsArray;
                    return [4 /*yield*/, team.save()];
                case 2:
                    updatedTeam = _a.sent();
                    return [2 /*return*/, updatedTeam];
                case 3:
                    error_5 = _a.sent();
                    throw new Error("Fehler beim Update der POI-Punkte im Team");
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateTeamPoiPoints = updateTeamPoiPoints;
function updateDeletePlayerInTeam(teamId, updatedData) {
    return __awaiter(this, void 0, Promise, function () {
        var team, updatedTeam, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, TeamModel_1.Team.findById(teamId).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team nicht gefunden");
                    }
                    // Check action type
                    if (updatedData.action === "remove") {
                        team.players = team.players.filter(function (id) { return id.toString() !== updatedData.playerID; });
                    }
                    else if (updatedData.action === "add") {
                        if (!team.players.some(function (id) { return id.toString() === updatedData.playerID; })) {
                            team.players.push(new mongoose_1["default"].Types.ObjectId(updatedData.playerID)); // Ensure it's stored as ObjectId
                        }
                    }
                    else {
                        throw new Error("Ungültige Aktion");
                    }
                    return [4 /*yield*/, team.save()];
                case 2:
                    updatedTeam = _a.sent();
                    return [2 /*return*/, updatedTeam];
                case 3:
                    error_6 = _a.sent();
                    throw new Error("Fehler beim Aktualisieren der Spieler im Team");
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateDeletePlayerInTeam = updateDeletePlayerInTeam;
function getTeamsByQACode(codeInvite) {
    return __awaiter(this, void 0, Promise, function () {
        var teams, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, TeamModel_1.Team.find({ codeInvite: codeInvite })];
                case 1:
                    teams = _a.sent();
                    return [2 /*return*/, teams];
                case 2:
                    error_7 = _a.sent();
                    console.error("Error in getTeamsByQACode:", error_7);
                    throw error_7;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTeamsByQACode = getTeamsByQACode;
function getTeam(id) {
    return __awaiter(this, void 0, Promise, function () {
        var team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TeamModel_1.Team.findById(id).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team mit der ID " + id + " wurde nicht gefunden.");
                    }
                    return [2 /*return*/, {
                            id: team.id.toString(),
                            name: team.name,
                            poiId: team.poiId.map(function (poiId) { return poiId.toString(); }),
                            poiPoints: team.poiPoints,
                            playersID: team.players.map(function (playerId) { return playerId.toString(); }),
                            codeInvite: team.codeInvite,
                            qaCode: team.qaCode,
                            shareUrl: team.shareUrl
                        }];
            }
        });
    });
}
exports.getTeam = getTeam;
function getTeamByPlayerId(id) {
    return __awaiter(this, void 0, Promise, function () {
        var objectId, team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objectId = new mongoose_1["default"].Types.ObjectId(id);
                    return [4 /*yield*/, TeamModel_1.Team.findOne({ players: objectId }).exec()];
                case 1:
                    team = _a.sent();
                    if (!team) {
                        throw new Error("Team f\u00FCr den Spieler mit der ID " + id + " wurde nicht gefunden.");
                    }
                    return [2 /*return*/, {
                            id: team.id.toString(),
                            name: team.name,
                            poiId: team.poiId.map(function (poiId) { return poiId.toString(); }),
                            poiPoints: team.poiPoints,
                            playersID: team.players.map(function (playerId) { return playerId.toString(); }),
                            codeInvite: team.codeInvite,
                            qaCode: team.qaCode,
                            shareUrl: team.shareUrl
                        }];
            }
        });
    });
}
exports.getTeamByPlayerId = getTeamByPlayerId;
