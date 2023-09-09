
export const getsubReddits = async () => {
    const response = await fetch("/subreddits");
    const json = await response.json();
    console.log(json.data.children);
    return json.data.children.map(child => child.data);
  };