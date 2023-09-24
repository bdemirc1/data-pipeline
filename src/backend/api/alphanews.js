

export const getAlphaNews = async () => {
    const response = await fetch(`/get_alphanews_data`);
    const json = await response.json();
    //console.log(json.feed);
    return json.feed;
  };