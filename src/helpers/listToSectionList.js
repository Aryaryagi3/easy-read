const listToSectionList = (list) => {
    const sectionListData = [];

    const volumes = Array.from(
        new Set(list.map((item) => item.volume))
    ).sort();

    volumes.forEach((volume) => {
        const data = list.filter((item) => item.volume == volume);

        sectionListData.push({
            volume,
            data: data,
        });
    });

    return sectionListData;
};

export default listToSectionList;