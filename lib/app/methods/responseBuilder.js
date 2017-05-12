export default (res, req, data) => {

    return {
        requestInfo: {
            routeName: req.routeName,
            requestUrl: `${req.headers.host}${req.url}`,
            params: req.params,
            query: req.query,
            path: req.path
        },
        responseData: data === null ? {totalCount: 0, data: []}  : {totalCount: data.length, data: data}
    };

};

