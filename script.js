burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav_list');


burger.addEventListener('click', () => {
  nav_list.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
})

function scrollToAbout(event) {
  event.preventDefault(); // Prevent the default anchor behavior

  // Get the 'About' section element
  const aboutSection = document.querySelector('#About');

  // Calculate the position to scroll to, subtracting 5rem (80px approximately)
  const offsetPosition = aboutSection.offsetTop + 80; // 80px for 5rem

  // Scroll to the calculated position smoothly
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToAbout1(event) {
  event.preventDefault(); // Prevent the default anchor behavior

  // Get the 'About' section element
  const aboutSection = document.querySelector('#About1');

  // Calculate the position to scroll to, subtracting 5rem (80px approximately)
  const offsetPosition = aboutSection.offsetTop + 80; // 80px for 5rem

  // Scroll to the calculated position smoothly
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}


const hindiButton = document.getElementById('toggleButton');
const contentA = document.querySelector('#content1 > div'); // Select the content inside landingA
const contentB = document.querySelector('#content2 > div'); // Select the content inside landingB

hindiButton.addEventListener('click', () => {
  // Toggle visibility of content A and B
  if (contentA.classList.contains('hidden')) {
    contentA.classList.remove('hidden');
    contentA.classList.add('visible');
    contentB.classList.remove('visible');
    contentB.classList.add('hidden');
  } else {
    contentA.classList.remove('visible');
    contentA.classList.add('hidden');
    contentB.classList.remove('hidden');
    contentB.classList.add('visible');
  }
});