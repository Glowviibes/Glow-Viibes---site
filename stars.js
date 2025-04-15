
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: black;
  overflow: hidden;
  position: relative;
  color: white;
  text-align: center;
}

.stars {
  width: 100%;
  height: 100%;
  background: url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/star.png');
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  animation: moveStars 100s linear infinite;
  z-index: -1;
  opacity: 0.4;
}

@keyframes moveStars {
  0% { background-position: 0 0; }
  100% { background-position: 10000px 10000px; }
}

.container {
  padding-top: 50px;
  z-index: 2;
  position: relative;
}

h1 {
  font-size: 48px;
  color: fuchsia;
  animation: gradientText 3s ease infinite alternate;
}

@keyframes gradientText {
  0% { color: fuchsia; }
  100% { color: #5500ff; }
}

p {
  font-size: 18px;
  margin-bottom: 30px;
}

