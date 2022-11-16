

export const routing = params => {
    return fetch(
        `https://map.ir/routes/${params.routingType}/${
            params.points
        }?steps=true&overview=${params.routingOverview}&alternatives=${
            params.alternatives
        }&geometries=geojson`,
        {
            method: "GET",
            headers: {
                "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjNzU4MzQ0MzI4NzZiN2EyYTA3ZWM0N2ZkZjZkODQ2ZjY4MjFmZmJlZTRkNzYwYWE5OTNkNmQyMDJhYjVhM2Y1MTAwMjg4YjY5N2YzZGRlIn0.eyJhdWQiOiIxOTgxMCIsImp0aSI6IjJjNzU4MzQ0MzI4NzZiN2EyYTA3ZWM0N2ZkZjZkODQ2ZjY4MjFmZmJlZTRkNzYwYWE5OTNkNmQyMDJhYjVhM2Y1MTAwMjg4YjY5N2YzZGRlIiwiaWF0IjoxNjY2OTc1MDU4LCJuYmYiOjE2NjY5NzUwNTgsImV4cCI6MTY2OTQ4MDY1OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.cE18Ja0i8Gzr5jq11QFhS_wbmFBgqfou5OEZUO4_je-mwIdgbXX8IRsj3JkcmmeqVxn8TQ_X_eyUi_dOPtYh_w_NEF07tF1b8I-NVw04Tr1gOtsUgySI2sFC2cWW3ePAq7bSPpTJV5_0guLzXRwsyYAAFrx022GTxUdxV6MLEA-Cvz69tJ96p8O3Ut_SCCuG9Mjb7VjpZDFLWDCIiY4u-xrydothNKCTMwsIWnZCj0JvPYAhOFpGlm3r3KMT0jTFI7j0BuJwDm-2s8TJfCgRanHWb3ob8TZJsN8kAC4StlK2L9WwIvOAt5vqYf5FlXq6OEIZKCEy9jZnb_8LcZ2OPA'
            }
        }
    );
};
