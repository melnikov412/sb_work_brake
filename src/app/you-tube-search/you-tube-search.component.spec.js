"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var you_tube_search_component_1 = require("./you-tube-search.component");
var search_result_component_1 = require("./search-result.component");
var search_box_component_1 = require("./search-box.component");
var you_tube_search_service_1 = require("./you-tube-search.service");
var defaultResponse = {
    items: [
        {
            id: { videoId: 'VIDEO_ID' },
            snippet: {
                title: 'TITLE',
                description: 'DESCRIPTION',
                thumbnails: {
                    high: { url: 'THUMBNAIL_URL' }
                }
            }
        }
    ]
};
describe('YouTubeSearchComponent', function () {
    var component;
    var fixture;
    var httpMock;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                you_tube_search_component_1.YouTubeSearchComponent,
                search_result_component_1.SearchResultComponent,
                search_box_component_1.SearchBoxComponent
            ],
            imports: [testing_2.HttpClientTestingModule],
            providers: [
                you_tube_search_service_1.YouTubeSearchService,
                { provide: you_tube_search_service_1.YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
                { provide: you_tube_search_service_1.YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' }
            ]
        });
    }));
    beforeEach(function () {
        testing_1.async(testing_1.inject([testing_2.HttpTestingController], function (_httpMock) {
            fixture = testing_1.TestBed.createComponent(you_tube_search_component_1.YouTubeSearchComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            httpMock = _httpMock;
        }));
    });
    afterEach(testing_1.inject([testing_2.HttpTestingController], function (httpMock) {
        httpMock.verify();
    }));
    describe('search', function () {
        function search(term, response, callback) {
            return testing_1.inject([you_tube_search_service_1.YouTubeSearchService, testing_2.HttpTestingController], testing_1.fakeAsync(function (service, httpMock) {
                var res;
                // search
                service.search(term).subscribe(function (_res) {
                    res = _res;
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush(response);
                testing_1.tick();
                callback(req.request, res);
            }));
        }
        it('parses YouTube video id', search('hey', defaultResponse, function (req, res) {
            var video = res[0];
            expect(video.id).toEqual('VIDEO_ID');
        }));
        it('parses YouTube video title', search('hey', defaultResponse, function (req, res) {
            var video = res[0];
            expect(video.title).toEqual('TITLE');
        }));
        it('parses YouTube video description', search('hey', defaultResponse, function (req, res) {
            var video = res[0];
            expect(video.description).toEqual('DESCRIPTION');
        }));
        it('parses YouTube video thumbnail', search('hey', defaultResponse, function (req, res) {
            var video = res[0];
            expect(video.description).toEqual('DESCRIPTION');
        }));
        it('sends the query', search('term', defaultResponse, function (req, res) {
            expect(req.url).toContain('q=term');
        }));
        it('sends the API key', search('term', defaultResponse, function (req, res) {
            expect(req.url).toContain('key=YOUTUBE_API_KEY');
        }));
        it('uses the provided YouTube URL', search('term', defaultResponse, function (req, res) {
            expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
        }));
    });
});
//# sourceMappingURL=you-tube-search.component.spec.js.map