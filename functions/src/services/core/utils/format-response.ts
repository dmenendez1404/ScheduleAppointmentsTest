const formatResponse = (statusCode: number, data?: any, message?: string) =>
    ({
    statusCode: statusCode,
    message: message || null,
    data: data || null
  })

export default formatResponse;