const async1 = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aaa17ce0bfmsh216492401803d60p13f1d5jsnbe4562b698cb",
        "X-RapidAPI-Host": "wordle-answers-solutions.p.rapidapi.com",
      },
    };
    const res = await fetch(
      "https://wordle-answers-solutions.p.rapidapi.com/today",
      options
    );

    const data = await res.json();
    let needData = data.today;
    console.log(needData);
    return needData;
  } catch (err) {
    console.log(err);
  }
};

export default async1;
