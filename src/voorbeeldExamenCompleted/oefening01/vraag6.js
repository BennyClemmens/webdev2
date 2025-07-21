/**
 * ===== Vraag 6 =====
 * Bekijk onderstaande code en vul ze aan zodat een geschikt bericht
 * in een alert wordt getoond wanneer myPromise settled.
 *
 * In het geval dat myPromise resolved moet de lengte van de
 * array (i.e. de resolve value) getoond worden,
 * In het geval dat de promise reject moet
 * de error (i.e. de reject value) getoond worden.
 **/

const retrieveData = (resolve, reject) => {
  const random = Math.random();
  if (random < 0.25) resolve([1, 2, 3, 4, 5, 6, 7, 8]);
  else if (random < 0.5) resolve([10, 20, 30, 40, 50]);
  else if (random < 0.75) resolve([100, 200, 300]);
  else reject(new Error('No data'));
};

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    retrieveData(resolve, reject);
  }, 2000);
});

/* Modeloplossing */
myPromise
  .then((data) => alert(`Received ${data.length} items`))
  .catch((error) => alert(error));

// 2 seconden na het laden van het script, verschijnt 1 van de volgende
// berichtjes in een alert
// "Received 8 items", of
// "Received 5 items", of
// "Received 3 items", of
// "Error: No data"
