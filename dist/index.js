"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaviconUrl = exports.getLogoUrl = exports.HUMARESO_LOGOS = exports.importDesignSystem = exports.HUMARESO_DESIGN_SYSTEM = void 0;
__exportStar(require("./types"), exports);
__exportStar(require("./colors"), exports);
__exportStar(require("./typography"), exports);
// Design system constants
exports.HUMARESO_DESIGN_SYSTEM = {
    name: 'Humareso Design System',
    version: '1.0.0',
    description: 'Shared design system for Humareso front-end applications'
};
// CSS import helper
const importDesignSystem = () => {
    if (typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/humareso-design@latest/css/humareso-design.css';
        document.head.appendChild(link);
    }
};
exports.importDesignSystem = importDesignSystem;
// Logo utilities
__exportStar(require("./logos"), exports);
var logos_1 = require("./logos");
Object.defineProperty(exports, "HUMARESO_LOGOS", { enumerable: true, get: function () { return logos_1.HUMARESO_LOGOS; } });
Object.defineProperty(exports, "getLogoUrl", { enumerable: true, get: function () { return logos_1.getLogoUrl; } });
Object.defineProperty(exports, "getFaviconUrl", { enumerable: true, get: function () { return logos_1.getFaviconUrl; } });
