module.exports = function (config, env) {
    return {
        ...config,
        resolve: {
            ...config.resolve,
            fallback: {
                assert: require.resolve('assert'),
                buffer: require.resolve('buffer'),
                stream: require.resolve('stream-browserify'),
                crypto: require.resolve('crypto-browserify'),
            },
        },
        ignoreWarnings: [/Failed to parse source map/],
    };
};
