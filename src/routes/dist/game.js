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
exports.gameRouter = void 0;
var express_1 = require("express");
var GameService = require("../services/GameService");
exports.gameRouter = express_1["default"].Router();
/**
 * Route zum Erstellen eines neuen Spiels
 */
exports.gameRouter.post("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newGame, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, GameService.createGame(req.body)];
            case 1:
                newGame = _a.sent();
                res.status(201).send(newGame);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: "Fehler beim Erstellen des Spiels" });
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Löschen eines Spiels anhand der ID
 */
exports.gameRouter["delete"]("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, wasDeleted, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, GameService.deleteGame(id)];
            case 2:
                wasDeleted = _a.sent();
                if (!wasDeleted) {
                    res.status(404).json({ message: "Spiel nicht gefunden" });
                    return [2 /*return*/];
                }
                res.status(204).send();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(500).json({ message: "Fehler beim Löschen des Spiels" });
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Abrufen eines Spiels anhand der ID
 */
exports.gameRouter.get("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, game, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, GameService.getGameById(id)];
            case 2:
                game = _a.sent();
                if (!game) {
                    res.status(404).json({ message: "Spiel nicht gefunden" });
                    return [2 /*return*/];
                }
                res.status(200).send(game);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(500).json({ message: "Fehler beim Abrufen des Spiels" });
                next(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Abrufen eines Beispiel Spiels
 */
exports.gameRouter.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var game, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, GameService.getGame()];
            case 1:
                game = _a.sent();
                if (!game) {
                    res.status(404).json({ message: "Spiel nicht gefunden" });
                    return [2 /*return*/];
                }
                res.status(200).send(game);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json({ message: "Fehler beim Abrufen des Spiels" });
                next(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Abrufen aller POIs eines Spiels anhand der GameId
 */
exports.gameRouter.get("/pois/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, game, poilist, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, GameService.getGame()];
            case 2:
                game = _a.sent();
                poilist = game.poilId;
                if (!game) {
                    res.status(404).json({ message: "Spiel nicht gefunden" });
                    return [2 /*return*/];
                }
                if (!poilist) {
                    res.status(404).json({ message: "keine POIs in Game" });
                }
                res.status(200).send(poilist);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(500).json({ message: "Fehler beim Abrufen des Spiels" });
                next(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
