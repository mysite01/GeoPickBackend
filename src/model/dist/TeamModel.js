"use strict";
exports.__esModule = true;
exports.Team = void 0;
var mongoose_1 = require("mongoose");
var teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    codeInvite: { type: String, required: true },
    qaCode: { type: String, required: true },
    shareUrl: { type: String, required: true },
    poiId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'PositionClaimed' }],
    poiPoints: [{ type: Number }],
    players: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Player' }]
});
exports.Team = mongoose_1["default"].model('Team', teamSchema);
