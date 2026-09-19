const pagination = (
    page = 1,
    limit = 10
) => {

    const currentPage = Number(page);

    const perPage = Number(limit);

    return {

        skip:
            (currentPage - 1) * perPage,

        limit: perPage,

    };

};

export default pagination;