const contentEl = document.querySelector('#content')
const formEl = document.querySelector('#form')
const inputEl = document.querySelector('#input')

function getWeatherData(cityName = 'Moscow') {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`
	)
		.then(res => res.json())
		.then(data => {
			renderWeatherData(data)
		})
}

function renderWeatherData(data) {
	document.querySelector(
		'.wrapper'
	).style.backgroundImage = `url(${getWeatherWallpaper(data.weather[0].main)})`
	contentEl.innerHTML = ''
	contentEl.innerHTML = `
    <div class="weather">
      <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">
      </div>
      <div>
        <h1>${data.main.temp}℃</h1>
        <h4>${data.name} ${data.sys.country}</h4>
        <h5>${data.weather[0].main}</h5>
      </div>
    </div>
  `
}

function getWeatherWallpaper(type) {
	switch (type) {
		case 'Clouds': {
			return 'https://static.vecteezy.com/system/resources/previews/009/432/530/non_2x/night-sky-background-with-clouds-full-moon-and-stars-vector.jpg'
		}
		case 'Rain': {
			return 'https://images.pexels.com/photos/373481/pexels-photo-373481.jpeg?cs=srgb&dl=pexels-pixabay-373481.jpg&fm=jpg'
		}
		case 'Clear': {
			return 'https://i.pinimg.com/originals/ff/c6/4c/ffc64cc10b554c306e3e53925265405a.jpg'
		}
		case 'Snow': {
			return 'https://www.wallpaperflare.com/static/3/128/981/night-landscape-snow-ice-wallpaper.jpg'
		}
		case 'Fog': {
			return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42T3Q7rmCwBxXGVu08fzJgB_RcEf2AkFuBQ&usqp=CAU'
		}
		case 'Mist': {
			return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42T3Q7rmCwBxXGVu08fzJgB_RcEf2AkFuBQ&usqp=CAU'
		}
		default: {
			return 'https://i.pinimg.com/originals/ff/c6/4c/ffc64cc10b554c306e3e53925265405a.jpg'
		}
	}
}

getWeatherData()

formEl.addEventListener('submit', e => {
	e.preventDefault()
	getWeatherData(inputEl.value)
})
