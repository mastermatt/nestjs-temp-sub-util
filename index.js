"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CoolKafkaTooling_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoolKafkaTooling = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let CoolKafkaTooling = CoolKafkaTooling_1 = class CoolKafkaTooling {
    constructor(client) {
        this.client = client;
    }
    static register() {
        return {
            provide: CoolKafkaTooling_1,
            inject: [microservices_1.ClientKafka],
            useFactory: (client) => {
                // bits here removed to de-cluter the example
                return new CoolKafkaTooling_1(client);
            }
        };
    }
};
CoolKafkaTooling = CoolKafkaTooling_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], CoolKafkaTooling);
exports.CoolKafkaTooling = CoolKafkaTooling;
