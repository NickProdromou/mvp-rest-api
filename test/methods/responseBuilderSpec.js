import responseBuilder from '../../lib/app/methods/responseBuilder';
import requestMock from '../mocks/responseBuilderMocks';

describe('responseBuilder method', () => {

    it('should build the response based on the params passed in', () => {

        const result = responseBuilder({}, requestMock.req, requestMock.data);
        const expectedResult = {
            requestInfo: {
                routeName: 'test',
                requestUrl: 'http://localhost:3000/keys/chrome',
                params: {program: 'chrome'},
                query: {include: 'some,values'},
                path: '/keys/chrome'
            },
            responseData: {
                totalCount: 2,
                data: [
                    {
                        mac_key: "⌘+ n",
                        win_key: "Ctrl + n",
                        description: "Open a new window",
                        program: {
                            id: 1,
                            name: "Google Chrome",
                            short_name: "chrome",
                            created_at: "2017-04-24T02:01:52.000Z",
                            updated_at: "2017-04-24T02:01:52.000Z"
                        }
                    },
                    {
                        mac_key: "⌘+ Shift + n",
                        win_key: "Ctrl + Shift + n",
                        description: "Open a new window in Incognito mode",
                        program: {
                            id: 1,
                            name: "Google Chrome",
                            short_name: "chrome",
                            created_at: "2017-04-24T02:01:52.000Z",
                            updated_at: "2017-04-24T02:01:52.000Z"
                        }
                    },
                ]
            }
    };
        expect(result).to.deep.equal(expectedResult)

    });

    it('should set the data to be an empty array, and it should set the total count to zero', () => {
        const result = responseBuilder({}, requestMock.req, []);
        const expectedResult = {
            requestInfo: {
                routeName: 'test',
                requestUrl: 'http://localhost:3000/keys/chrome',
                params: {program: 'chrome'},
                query: {include: 'some,values'},
                path: '/keys/chrome'
            },
            responseData: {
                totalCount: 0,
                data: []
            }
        };
        expect(result).to.deep.equal(expectedResult)
    });

});
