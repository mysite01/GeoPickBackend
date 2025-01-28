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
exports.poiRouter = void 0;
var express_1 = require("express");
var POIService_1 = require("../services/POIService");
var TeamService_1 = require("../services/TeamService");
exports.poiRouter = express_1["default"].Router();
/**
 * Route für das Erstellen eines neuen POI
 */
exports.poiRouter.post("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newPOI, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, POIService_1.createPOI(req.body)];
            case 1:
                newPOI = _a.sent();
                res.status(201).send(newPOI);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Route für das Löschen eines POI anhand der ID
 */
exports.poiRouter["delete"]("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = "";
                if (req.params) {
                    id = req.params.id;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, POIService_1.deletePOI(id)];
            case 2:
                _a.sent();
                res.status(204).send();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(404);
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Route für das Abrufen eines POI anhand der ID
 */
exports.poiRouter.get("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, poi, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = "";
                if (req.params) {
                    id = req.params.id;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, POIService_1.getPOIById(id)];
            case 2:
                poi = _a.sent();
                res.status(200).send(poi);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(404);
                next(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Route für das Abrufen eines POI anhand der ID und zugehörigem team
 */
exports.poiRouter.get("/:teamId/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, teamId, poi, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = "";
                teamId = "";
                if (req.params) {
                    id = req.params.id;
                    teamId = req.params.teamId;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, POIService_1.getPOIByIdandTeam(id, teamId)];
            case 2:
                poi = _a.sent();
                res.status(200).send(poi);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(404);
                next(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Route für das Abrufen aller POIs
 */
exports.poiRouter.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pois, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, POIService_1.getAllPOIs()];
            case 1:
                pois = _a.sent();
                res.status(200).send(pois);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500);
                next(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.poiRouter.post("/claim/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var maxPOIClaimDistance, id, teamIds, player, positionPlayer, teams, index, _i, teamIds_1, teamId_1, _a, _b, poiCount, _c, teams_1, team_1, poi, distance, team, teamId, err_6;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                maxPOIClaimDistance = 200;
                id = "";
                if (req.params) {
                    id = req.params.id;
                }
                if (req.body) {
                    teamIds = req.body.teamIds;
                    player = req.body.playerId;
                    positionPlayer = req.body.positionPlayer;
                }
                _d.label = 1;
            case 1:
                _d.trys.push([1, 14, , 15]);
                teams = Array(teamIds.length).fill(null);
                index = 0;
                _i = 0, teamIds_1 = teamIds;
                _d.label = 2;
            case 2:
                if (!(_i < teamIds_1.length)) return [3 /*break*/, 5];
                teamId_1 = teamIds_1[_i];
                _a = teams;
                _b = index;
                return [4 /*yield*/, TeamService_1.getTeam(teamId_1)];
            case 3:
                _a[_b] = _d.sent();
                index++;
                _d.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                poiCount = 1;
                for (_c = 0, teams_1 = teams; _c < teams_1.length; _c++) {
                    team_1 = teams_1[_c];
                    if (team_1.poiId.includes(id)) {
                        poiCount++;
                    }
                }
                return [4 /*yield*/, POIService_1.getPOIById(id)];
            case 6:
                poi = _d.sent();
                distance = calculateDistance(poi.lat, poi.long, positionPlayer.lat, positionPlayer.lng);
                return [4 /*yield*/, TeamService_1.getTeamByPlayerId(player)];
            case 7:
                team = _d.sent();
                teamId = team.id;
                if (!(!team.poiId.includes(id) && teamId)) return [3 /*break*/, 12];
                if (!(distance < maxPOIClaimDistance)) return [3 /*break*/, 10];
                team.poiId = __spreadArrays(new Set(__spreadArrays(team.poiId, [id])));
                team.poiPoints.push(poiCount);
                return [4 /*yield*/, TeamService_1.updateTeamPOIs(teamId, { poiId: team.poiId })];
            case 8:
                _d.sent();
                return [4 /*yield*/, TeamService_1.updateTeamPoiPoints(teamId, { poiPoints: team.poiPoints })
                    //console.log("poiPoints: " + team.poiPoints)
                ];
            case 9:
                _d.sent();
                //console.log("poiPoints: " + team.poiPoints)
                res.status(200).json({ message: "POI claimed successfully", team: team });
                return [3 /*break*/, 11];
            case 10:
                res.status(300).json({ message: "Too far away. Current Distance: " + Math.round(distance) + " meters" });
                _d.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                res.status(300).json({ message: "POI already claimed" });
                _d.label = 13;
            case 13: return [3 /*break*/, 15];
            case 14:
                err_6 = _d.sent();
                res.status(404);
                next(err_6);
                return [3 /*break*/, 15];
            case 15: return [2 /*return*/];
        }
    });
}); });
function calculateDistance(lat1, lon1, lat2, lon2) {
    var toRadians = function (degree) { return (degree * Math.PI) / 180; };
    var R = 6371e3;
    var dLat = toRadians(lat2 - lat1);
    var dLon = toRadians(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
}
exports["default"] = exports.poiRouter;
