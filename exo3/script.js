  
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const citations = [
    'Si je suis venu au monde, ce n’est pas pour le transformer en un lieu où il fasse bon vivre, mais pour y vivre.    Henry David Thoreau',
    'L’élite n’est, matériellement, ni plus avisée ni meilleure que la masse.    Henry David Thoreau',
    'En tuant le temps, on blesse l’éternité.    Henry David Thoreau',
    'On rougit d’abord de son crime et puis on s’y habitue.    Henry David Thoreau',
    'Tu dois vivre dans le présent, te lancer au-devant de chaque vague, trouver ton éternité à chaque instant.     Henry David Thoreau',
    'Ce que tu veux peut t\'appartenir, mais tu dois l\'accepter, y adhérer de toute ton âme.      Ayn Rand',
    'Une plante peut obtenir sa nourriture du sol dans lequel elle pousse. Un animal doit chasser pour l’obtenir. L’homme doit la produire.      Ayn Rand',
    'Nous sommes tous frères sous la peau et j\'aimerais écorcher l\'humanité pour le prouver.     Ayn Rand',
    'Le bonheur indique la réussite et la vie, la souffrance est un signal d’avertissement de défaite et de mort.      Ayn Rand',
    'L’homme doit vivre pour son propre intérêt, ne sacrifiant ni lui-même aux autres, ni les autres à lui-même. Vivre pour son propre intérêt signifie que l’accomplissement de son propre bonheur est le plus haut but moral de l’homme.        Ayn Rand',
]
                

const citation = document.getElementById('citation');

// var author = document.getElementById('author').innerHTML; 

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    showCitation(citation);
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

//fermer la modal via boutton
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

//cette fonction permet d'afficher une citation random à partir du array citations
function showCitation(){
    
    let newCitation = 'En tuant le temps, on blesse l’éternité.    Henry David Thoreau';
    for (let i =0; i < citations.length; i++) {
        newCitation = citations[Math.floor(Math.random() * citations.length )];
    }
    citation.innerHTML = newCitation;
    console.log(newCitation);
    
}
// cette fonction permet ouvrir le modal 
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

// cette fonction permet de fermer le modal sans boutton
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

