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
exports.gameInstanceRouter = void 0;
var express_1 = require("express");
var GameInstanceService_1 = require("../services/GameInstanceService");
exports.gameInstanceRouter = express_1["default"].Router();
/**
 * Route zum Erstellen einer neuen GameInstance.
 */
exports.gameInstanceRouter.post("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newGameInstance, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, GameInstanceService_1.createGameInstance(req.body)];
            case 1:
                newGameInstance = _a.sent();
                res.status(201).send(newGameInstance);
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
 * Route zum Abrufen einer GameInstance anhand der ID.
 */
exports.gameInstanceRouter.get("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var gameInstanceId, gameInstance, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                gameInstanceId = req.params.id;
                return [4 /*yield*/, GameInstanceService_1.getGameInstanceById(gameInstanceId)];
            case 1:
                gameInstance = _a.sent();
                res.status(200).json(gameInstance);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(404).json({ error: "GameInstance mit der ID " + req.params.id + " wurde nicht gefunden." });
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Aktualisieren des Status einer GameInstance.
 */
exports.gameInstanceRouter.patch("/:id/status", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        throw new Error("not implemented yet");
    });
}); });
/**
 * Route zum Löschen einer GameInstance anhand der ID.
 */
exports.gameInstanceRouter["delete"]("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var gameInstanceId, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                gameInstanceId = req.params.id;
                return [4 /*yield*/, GameInstanceService_1.deleteGameInstance(gameInstanceId)];
            case 1:
                _a.sent();
                res.status(200).json({ message: "GameInstance wurde erfolgreich gelöscht!" });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(404).json({ error: "GameInstance mit der ID " + req.params.id + " konnte nicht gel\u00F6scht werden." });
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Route zum Abrufen aller GameInstances eines bestimmten Spiels.
 */
exports.gameInstanceRouter.get("/game/:gameId", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        throw new Error("not implemented yet");
    });
}); });
exports["default"] = exports.gameInstanceRouter;
