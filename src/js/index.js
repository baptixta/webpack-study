import '../css/styles.scss';
import img from '../assets/selah.png'

const textComponent = () => {
    const title = document.createElement('h1');
    title.innerHTML = 'Olá mundo';
    title.classList.add('title');
    return title;
}

const imgComponent = () => {
    const image = new Image(300, 150);
    image.src = img;
    return image;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());