// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Que tengas un bonito día", time: 12 },
  { text: "Que te abrace la alegría", time: 15 },
  { text: "Que abras tus puertas de par en par", time: 19 },
  { text: "De par en par", time: 22 },
  { text: "Que tengas un bonito día", time: 26 },
  { text: "Qué tanto ruido y tanta prisa", time: 30 },
  { text: "No sean tropiezos para tu andar", time: 35 },
  { text: "Para tu andar", time: 40 },
  { text: "Sé que en tu vida", time: 44 },
  { text: "Como en la de todos", time: 48 },
  { text: "Hay cosas que duelen", time: 52 },
  { text: "De todos modos", time: 57 },
  { text: "Y a veces resulta imposible", time: 83 },
  { text: "No pensar de más", time: 91 },
  { text: "Tal vez una pausa en las preocupaciones", time: 97 },
  { text: "Te puede ayudar a ver otras opciones", time: 104 },
  { text: "Sacar la cabeza del hueco", time: 108 },
  { text: "Para respirar", time: 144 },
  { text: "Tal vez es más fácil de lo que pensamos", time: 148 },
  { text: "Y basta con ser un poco más humanos", time: 153 },
  { text: "Un gesto un abrazo un: Hola, ¿qué tal, cómo estás?", time: 158 },
  { text: "Tal vez la respuesta siempre estuvo en frente", time: 164 },
  { text: "Confiar en ti mismo confiar en la gente", time: 169 },
  { text: "Un gesto un abrazo un: Hola, ¿qué tal, cómo estás?", time: 183 },
  { text: "Que tengas un bonito día", time: 188 },
  { text: "Quiero invitarte a una revolución", time: 193 },
  { text: "No sé si sea el camino o si es la solución es la revolución de la amabilidad", time: 197 },
  { text: "Ser un rayo de luz en medio de la oscuridad", time: 201 },
  { text: "Y que se pase de mano en mano", time: 205 },
  { text: "Si todos se contagian", time: 210 },
  { text: "Se hace más liviano", time: 215 },
  { text: "Ponerte una sonrisa", time: 220 },
  { text: "Pa empezar el día una recarga de energía", time: 225 },
  { text: "Hay deudas retrasos y hay tanto quebranto hay flores montañas", time: 230 },
  { text: "Y un montón de gatos tal vez es cuestión de escoger hacia donde enfocar", time: 235 },
  { text: "Tal vez es más fácil de lo que pensamos", time: 240 },
  { text: "Y basta con ser un poco más humanos", time: 245 },
  { text: "Un gesto un abrazo un: Hola, ¿qué tal, cómo estás?", time: 250 },
  { text: "Tal vez la respuesta siempre estuvo en frente confiar en ti mismo confiar en la gente", time: 255 },
  { text: "Un gesto un abrazo un: Hola, ¿qué tal, cómo estás?", time: 260 },
  { text: "Nadie sabe la sed con la que bebe el vecino", time: 265 },
  { text: "Ni a nadie se le niega una copa de vino", time: 270 },
  { text: "Brindemos, pues por nuestra vida, ¡salud!", time: 275 },
  { text: "Que tengas un bonito día", time: 280 },
  { text: "Que tengas una linda vida y que seas feliz", time: 285 },
  { text: "Que tengas un bonito día y que seas feliz", time: 290 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); // Intervalo de 100ms para mayor precisión

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
