"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var you_tube_search_service_1 = require("./you-tube-search.service");
exports.youTubeSearchInjectables = [
    { provide: you_tube_search_service_1.YouTubeSearchService, useClass: you_tube_search_service_1.YouTubeSearchService },
    { provide: you_tube_search_service_1.YOUTUBE_API_KEY, useValue: you_tube_search_service_1.YOUTUBE_API_KEY },
    { provide: you_tube_search_service_1.YOUTUBE_API_URL, useValue: you_tube_search_service_1.YOUTUBE_API_URL }
];
//# sourceMappingURL=you-tube-search.injectables.js.map