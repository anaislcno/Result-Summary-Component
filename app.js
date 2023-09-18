fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Iterate over the JSON data and populate the HTML elements
    jsonData.forEach((item) => {
      const { category, icon, score } = item;

      // Create a new category element
      const categoryElement = document.createElement("div");
      categoryElement.id = category.toLowerCase();
      categoryElement.className = "category";

      // Create the content for the category element
      categoryElement.innerHTML = `
        <div id="top-left" class="corner"></div>
        <div id="top-right" class="corner"></div>
        <div id="bottom-right" class="corner"></div>
        <div id="bottom-left" class="corner"></div>
        <div class="content">
          <img class="category__img" src="${icon}" alt="${category} icon" />
          <h3>${category}</h3>
          <div class="score">
            <p><span>${score} </span>/ 100</p>
          </div>
        </div>
        </div>
      `;

      // Append the category element to the document
      document
        .getElementById("category__container")
        .appendChild(categoryElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
