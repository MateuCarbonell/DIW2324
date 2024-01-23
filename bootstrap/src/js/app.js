import '../bootstrap-5.3.2/scss/bootstrap.scss';
import '../bootstrap-5.3.2/scss/bootstrap-grid.scss';
import '../bootstrap-5.3.2/scss/bootstrap-utilities.scss';
import '../bootstrap-5.3.2/scss/bootstrap-reboot.scss';
import '../assets/ciber.jpg';
import '../assets/erasmus.jpg';
import '../assets/estudiante.jpeg';
import '../assets/estudiante2.jpg';
import '../assets/estudiante3.jpg';
import '../assets/logocifp.png';
import '../assets/torrada.jpg';

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})