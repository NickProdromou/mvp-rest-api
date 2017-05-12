export default {
    req: {
        routeName: 'test',
        headers: {
            host: 'http://localhost:3000'
        },
        url: '/keys/chrome',
        params: {
            program: 'chrome'
        },
        query: {
          include: 'some,values'
        },
        path: '/keys/chrome'
    },
    data:  [
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

