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
exports.getGame = exports.getGameById = exports.deleteGame = exports.createGame = void 0;
var mongoose_1 = require("mongoose");
var GameModel_1 = require("../model/GameModel");
/**
 * Erstellt ein neues Spiel
 */
function createGame(gameResource) {
    var _a, _b;
    return __awaiter(this, void 0, Promise, function () {
        var game, savedGame, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    game = new GameModel_1.Game({
                        title: gameResource.title,
                        beschreibung: gameResource.beschreibung,
                        poilId: (_a = gameResource.poilId) === null || _a === void 0 ? void 0 : _a.map(function (id) { return new mongoose_1["default"].Types.ObjectId(id); }),
                        maxTeam: gameResource.maxTeam,
                        userId: new mongoose_1["default"].Types.ObjectId(gameResource.userId),
                        POIs: gameResource.POIs || []
                    });
                    return [4 /*yield*/, game.save()];
                case 1:
                    savedGame = _c.sent();
                    return [2 /*return*/, {
                            id: savedGame._id.toString(),
                            title: savedGame.title,
                            beschreibung: savedGame.beschreibung,
                            poilId: (_b = savedGame.poilId) === null || _b === void 0 ? void 0 : _b.map(function (id) { return id.toString(); }),
                            maxTeam: savedGame.maxTeam,
                            userId: savedGame.userId.toString(),
                            POIs: gameResource.POIs || []
                        }];
                case 2:
                    error_1 = _c.sent();
                    throw new Error("Fehler beim Erstellen des Spiels: " + error_1.message);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createGame = createGame;
/**
 * Löscht ein Spiel anhand der ID
 */
function deleteGame(id) {
    return __awaiter(this, void 0, Promise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, GameModel_1.Game.findByIdAndDelete(id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result !== null]; // Gibt `true` zurück, wenn ein Spiel gelöscht wurde, `false`, wenn kein Spiel gefunden wurde
            }
        });
    });
}
exports.deleteGame = deleteGame;
/**
 * Holt ein Spiel anhand der ID
 */
function getGameById(gameId) {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var game, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, GameModel_1.Game.findById(gameId).exec()];
                case 1:
                    game = _b.sent();
                    if (!game) {
                        throw new Error("Spiel nicht gefunden"); // Diese Fehlermeldung wird erwartet
                    }
                    return [2 /*return*/, {
                            id: game._id.toString(),
                            title: game.title,
                            beschreibung: game.beschreibung || "",
                            poilId: (_a = game.poilId) === null || _a === void 0 ? void 0 : _a.map(function (id) { return id.toString(); }),
                            maxTeam: game.maxTeam,
                            userId: game.userId.toString(),
                            POIs: []
                        }];
                case 2:
                    error_2 = _b.sent();
                    throw new Error("Spiel nicht gefunden"); // Einheitliche Fehlermeldung
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getGameById = getGameById;
/**
 * Holt ein Beispiel Spiel
 */
function getGame() {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var game, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, GameModel_1.Game.findOne().exec()];
                case 1:
                    game = _b.sent();
                    if (!game) {
                        throw new Error("Spiel nicht gefunden"); // Diese Fehlermeldung wird erwartet
                    }
                    return [2 /*return*/, {
                            id: game._id.toString(),
                            title: game.title,
                            beschreibung: game.beschreibung || "",
                            poilId: (_a = game.poilId) === null || _a === void 0 ? void 0 : _a.map(function (id) { return id.toString(); }),
                            maxTeam: game.maxTeam,
                            userId: game.userId.toString(),
                            POIs: []
                        }];
                case 2:
                    error_3 = _b.sent();
                    throw new Error("Spiel nicht gefunden"); // Einheitliche Fehlermeldung
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getGame = getGame;
