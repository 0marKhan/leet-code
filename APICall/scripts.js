// making the api call

const options = {
  method: "GET",
  url: "https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters",
  headers: {
    "X-RapidAPI-Key": "83836b648amsh97b5e8ec6497369p134bb7jsna8e79cb8fed1",
    "X-RapidAPI-Host": "star-wars-characters.p.rapidapi.com",
  },
};

const getData = async () => {
  try {
    let response = await axios.request(options);
    const data = response.data;

    // Select the container element
    const container = document.querySelector(".container");

    // Assuming 'data' is an array of objects, create a string representation
    data.forEach((item) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = JSON.stringify(item, null, 2); // Convert object to a formatted string
      container.appendChild(paragraph);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();

getData();
