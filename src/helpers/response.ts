import { IResponse } from "../interface/response";

const StatusCodeChecker = (statusCode: number) => {
    if(statusCode === 200)
        return 'Success!'
    if(statusCode === 400)
        return 'Bad Request!'
    if(statusCode === 404)
        return 'Not Found!'
    if(statusCode === 500)
        return 'Something error occured, please contact administrator!'
}


const ApiResponse = ({ success, data, statusCode }: IResponse) => {
    return {
        count: data === null || data === undefined ? 0 : data.length,
        success: success,
        data: data,
        statusCode: statusCode,
        statusText: StatusCodeChecker(statusCode)
    }
}

const SingleApiResponse = ({ success, data, statusCode}: IResponse) => {
    return {
        count: 1,
        success: success,
        data: data,
        statusCode: statusCode,
        statusText: StatusCodeChecker(statusCode)
    }
}

export { SingleApiResponse, ApiResponse }