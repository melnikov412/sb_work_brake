"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var you_tube_search_component_1 = require("./you-tube-search.component");
var search_result_component_1 = require("./search-result.component");
var search_box_component_1 = require("./search-box.component");
var you_tube_search_service_1 = require("./you-tube-search.service");
describe('YouTubeSearchComponent (before)', function () {
    var component;
    var fixture;
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
        fixture = testing_1.TestBed.createComponent(you_tube_search_component_1.YouTubeSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    describe('search', function () {
        it('parses YouTube response', testing_1.inject([you_tube_search_service_1.YouTubeSearchService, testing_2.HttpTestingController], testing_1.fakeAsync(function (service, httpMock) {
            var res;
            service.search('hey').subscribe(function (_res) {
                res = _res;
            });
            var req = httpMock.expectOne({ method: 'GET' });
            req.flush({
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
            });
            testing_1.tick();
            var video = res[0];
            expect(video.id).toEqual('VIDEO_ID');
            expect(video.title).toEqual('TITLE');
            expect(video.description).toEqual('DESCRIPTION');
            expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');
            httpMock.verify();
        })));
    });
});
//# sourceMappingURL=you-tube-search.component.before.spec.js.map