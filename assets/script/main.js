const audio = document.getElementById('audio');
var done = false;

function play() {
	done = true;
    audio.play();
};

function pause() {
	done = false;
	audio.pause();
}

document.body.onclick = () => {
	done ? pause() : play();
};