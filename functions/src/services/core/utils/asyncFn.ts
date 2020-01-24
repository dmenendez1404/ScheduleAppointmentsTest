const asyncFn = async (res: any, fn: Promise<any>) => {
    const response = await fn;
    res.send(response)
}

export default asyncFn;  