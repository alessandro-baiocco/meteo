const cercaMeteo = async () => {
  myText = document.querySelector(".gradi");
  cerca = document.querySelector(".cerca");
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cerca.value}&appid=${KEY}&units=metric`
    );
    if (request.status === 404) {
      myText.innerText = "ci dispiace la città ricerca non è stata trovata";
    }
    if (request.ok) {
      const data = await request.json();
      console.log(data);
      myText.innerText = `a ${cerca.value} ci sono ${Math.floor(data.main.temp)}°C`;
    }
  } catch {
    myText.innerText = "qualcosa è andato storto";
  }
};
