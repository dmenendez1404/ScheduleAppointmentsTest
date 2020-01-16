//
// export default async function getPaginatedData(dbConnection: any, labelAlias: string, options: any, transform: any, patternIds?: string[]): Promise<any> {
//     const { limit = 10, page = 1, sortBy, order = 'ASC' } = options;
//     // const count = (await session.run(`${query} RETURN count(DISTINCT ${labelAlias})`)).records[0].get(`count(DISTINCT ${labelAlias})`).low;
//     // const offset = limit * (page - 1);
//     // const countPages = Math.floor((count - 1) / limit) + 1;
//     // const rawData = await session.run(`${query}
//     //     RETURN DISTINCT ${labelAlias}${patternIds && patternIds.length? `, ${patternIds.join(',')}`:``}
//     //     ${sortBy ? `ORDER BY "${sortBy}" ${order.toUpperCase()}`: ``}
//     //     SKIP ${offset}
//     //     LIMIT ${limit}`);
//     // const data = rawData.records.map(record => transform(record));
//
//     return { count, limit, page, countPages, data };
// };