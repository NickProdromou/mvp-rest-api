const server = (app, port) => app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

export default server;
