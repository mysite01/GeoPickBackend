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
var dotenv_1 = require("dotenv");
dotenv_1["default"].config(); // .env-Datei laden
var http_1 = require("http");
var mongoose_1 = require("mongoose");
var app_1 = require("./app");
var mongoose_2 = require("mongoose");
var GameService = require("./services/GameService");
var POIService = require("./services/POIService");
var ws_1 = require("ws");
function createExampleGame() {
    return __awaiter(this, void 0, void 0, function () {
        var berlinPoi1, berlinPoi2, berlinPoi3, berlinPoi4, berlinPoi5, berlinPoi6, berlinPoi7, berlinPoi8, bhtPOI1, bhtPOI2, bhtPOI3, bhtPOI4, bhtPOI5, berlinPoi1FullData, berlinPoi2FullData, berlinPoi3FullData, berlinPoi4FullData, berlinPoi5FullData, berlinPoi6FullData, berlinPoi7FullData, berlinPoi8FullData, bhtPOI1FullData, bhtPOI2FullData, bhtPOI3FullData, bhtPOI4FullData, bhtPOI5FullData, gameData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    berlinPoi1 = { name: "Alexanderplatz", lat: 52.520008, long: 13.404954, beschreibung: "Ein belebter Platz mit Fernsehturm, Geschäften und urbanem Flair.", punkte: 100 };
                    berlinPoi2 = { name: "Brandenburger Tor", lat: 52.516275, long: 13.377704, beschreibung: "Ein ikonisches Monument und Symbol für Geschichte und Einheit.", punkte: 200 };
                    berlinPoi3 = { name: "Podsdamer Platz", lat: 52.509290, long: 13.376340, beschreibung: "Ein moderner Knotenpunkt mit Architektur, Kultur und Unterhaltung.", punkte: 100 };
                    berlinPoi4 = { name: "Oberbaumbrücke", lat: 52.501834, long: 13.445656, beschreibung: "Eine markante Brücke mit Doppeldeck-Architektur und historischem Charme.", punkte: 100 };
                    berlinPoi5 = { name: "Museumsinsel", lat: 52.516260, long: 13.402480, beschreibung: "Ein einzigartiges Kulturensemble mit weltberühmten Museen.", punkte: 100 };
                    berlinPoi6 = { name: "Volkspark Friedrichhain", lat: 52.528730, long: 13.442284, beschreibung: "Ein weitläufiger Park mit grünen Wiesen, Hügeln und Entspannungsoasen.", punkte: 50 };
                    berlinPoi7 = { name: "Deutsches Technikmuseum", lat: 52.498603, long: 13.378154, beschreibung: "Ein faszinierendes Museum mit historischen Exponaten zu Technik und Ingenieurskunst.", punkte: 50 };
                    berlinPoi8 = { name: "Checkpoint Charlie", lat: 52.507530, long: 13.390378, beschreibung: "Ein historischer Grenzpunkt und Symbol des Kalten Krieges.", punkte: 200 };
                    bhtPOI1 = { name: "Workout Park", lat: 52.545374, long: 13.352802, beschreibung: "Workout Park", punkte: 50 };
                    bhtPOI2 = { name: "Spielplatz auf dem Zeppelinplatz", lat: 52.546413, long: 13.353094, beschreibung: "Spielplatz auf dem Zeppelinplatz", punkte: 200 };
                    bhtPOI3 = { name: "Einfahrt", lat: 52.546101, long: 13.355068, beschreibung: "Einfahrt", punkte: 50 };
                    bhtPOI4 = { name: "Fahrradständer Zeppelinplatz", lat: 52.545717, long: 13.351990, beschreibung: "Fahrradständer Zeppelinplatz", punkte: 100 };
                    bhtPOI5 = { name: "Eingang Zeppelinplatz", lat: 52.545879, long: 13.354316, beschreibung: "Eingang Zeppelinplatz", punkte: 100 };
                    return [4 /*yield*/, POIService.createPOI(berlinPoi1)];
                case 1:
                    berlinPoi1FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi2)];
                case 2:
                    berlinPoi2FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi3)];
                case 3:
                    berlinPoi3FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi4)];
                case 4:
                    berlinPoi4FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi5)];
                case 5:
                    berlinPoi5FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi6)];
                case 6:
                    berlinPoi6FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi7)];
                case 7:
                    berlinPoi7FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(berlinPoi8)];
                case 8:
                    berlinPoi8FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(bhtPOI1)];
                case 9:
                    bhtPOI1FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(bhtPOI2)];
                case 10:
                    bhtPOI2FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(bhtPOI3)];
                case 11:
                    bhtPOI3FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(bhtPOI4)];
                case 12:
                    bhtPOI4FullData = _a.sent();
                    return [4 /*yield*/, POIService.createPOI(bhtPOI5)];
                case 13:
                    bhtPOI5FullData = _a.sent();
                    gameData = {
                        title: "Berlin Sehenswürdigkeiten",
                        beschreibung: "Einige der bekanntesten Sehenswürdigkeiten in Berlin",
                        poilId: [
                            berlinPoi1FullData.id,
                            berlinPoi2FullData.id,
                            berlinPoi3FullData.id,
                            berlinPoi4FullData.id,
                            berlinPoi5FullData.id,
                            berlinPoi6FullData.id,
                            berlinPoi7FullData.id,
                            berlinPoi8FullData.id,
                            bhtPOI1FullData.id,
                            bhtPOI2FullData.id,
                            bhtPOI3FullData.id,
                            bhtPOI4FullData.id,
                            bhtPOI5FullData.id,
                        ],
                        maxTeam: 5,
                        userId: new mongoose_2.Types.ObjectId().toString()
                    };
                    return [4 /*yield*/, GameService.createGame(gameData)];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var clients = new Set();
function broadcast(data) {
    var jsonData = JSON.stringify(data);
    clients.forEach(function (client) {
        if (client.readyState === ws_1.WebSocket.OPEN) {
            client.send(jsonData);
        }
    });
}
function setup() {
    return __awaiter(this, void 0, void 0, function () {
        function startHttpServer() {
            httpServer.listen(httpPort, function () {
                console.info("Listening for HTTP at http://localhost:" + httpPort);
            });
        }
        var mongodURI, MMS, mongo, httpPort, httpServer, wss;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("USE_SSL:", process.env.USE_SSL);
                    console.log("HTTP_PORT:", process.env.HTTP_PORT);
                    console.log("JWT_SECRET:", process.env.JWT_SECRET);
                    mongodURI = "memory";
                    if (!mongodURI) {
                        console.error("Cannot start");
                        process.exit(1);
                    }
                    if (!(mongodURI === "memory")) return [3 /*break*/, 3];
                    console.info("Start MongoMemoryServer");
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('mongodb-memory-server'); })];
                case 1:
                    MMS = _a.sent();
                    return [4 /*yield*/, MMS.MongoMemoryServer.create()];
                case 2:
                    mongo = _a.sent();
                    mongodURI = mongo.getUri();
                    _a.label = 3;
                case 3:
                    console.info("Connecting to MongoDB at " + mongodURI);
                    return [4 /*yield*/, mongoose_1["default"].connect(mongodURI)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, createExampleGame()];
                case 5:
                    _a.sent();
                    httpPort = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 3443;
                    httpServer = http_1["default"].createServer(app_1["default"]);
                    wss = new ws_1.WebSocketServer({ server: httpServer });
                    wss.on("connection", function (ws) {
                        //console.info("Ein neuer Client hat sich verbunden.");
                        clients.add(ws);
                        ws.on("message", function (message) {
                            try {
                                //console.info(`Nachricht empfangen: ${message}`);
                                var data = JSON.parse(message.toString());
                                //console.info("Parsed message:", data); // Debugging-Ausgabe
                                if (data.type === "join") {
                                    //console.info(`${data.playerName} ist Team ${data.teamId} beigetreten.`);
                                    broadcast({
                                        type: "join",
                                        playerId: data.playerId,
                                        playerName: data.playerName,
                                        teamId: data.teamId
                                    });
                                }
                                else if (data.type === "leave") {
                                    //console.info(`${data.playerName} hat Team ${data.teamId} verlassen.`);
                                    broadcast({
                                        type: "leave",
                                        playerId: data.playerId,
                                        playerName: data.playerName,
                                        teamId: data.teamId
                                    });
                                }
                                else if (data.type === "loadMap") {
                                    broadcast({
                                        type: "loadMap",
                                        dataGameInstance: data.dataGameInstance,
                                        teamID: data.teamID
                                    });
                                }
                                else if (data.type === "loadGame") {
                                    broadcast({
                                        type: "loadGame"
                                    });
                                }
                                else if (data.type === "gameOver") {
                                    broadcast({
                                        type: "gameOver"
                                    });
                                }
                                else if (data.type === "PoiClaimed") {
                                    broadcast({
                                        type: "PoiClaimed"
                                    });
                                }
                            }
                            catch (error) {
                                console.error("Fehler beim Verarbeiten der Nachricht:", error);
                            }
                        });
                        ws.on("close", function () {
                            //console.info("Ein Client hat die Verbindung geschlossen.");
                            clients["delete"](ws);
                        });
                    });
                    httpServer.on('error', function (err) {
                        if (err instanceof Error && err.code === 'EADDRINUSE') {
                            console.error('Address in use, retrying...');
                            setTimeout(function () {
                                httpServer.close();
                                startHttpServer();
                            }, 1000);
                        }
                        else {
                            console.error("Server error: " + err.message);
                        }
                    });
                    startHttpServer();
                    process.on('SIGINT', function () {
                        console.info('Received SIGINT. Shutting down gracefully...');
                        httpServer.close(function () {
                            console.info('Server closed.');
                            process.exit(0);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
setup();
