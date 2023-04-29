export const responseSuccess = (data, statusCode = 200) => {
    return {
        data,
        statusCode
    };
}

export const responseFail = ({ data }, statusCode = 500) => {
    return {
        data,
        statusCode
    };
}