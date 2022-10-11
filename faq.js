const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
// const faqs = [];

function showFaq() {
    let heading = document.querySelectorAll('h3')
    let paragraph = document.querySelectorAll('p')
    
    for(let faq in faqData) {
      heading[faq].textContent = faqData[faq].question
      paragraph[faq].textContent = faqData[faq].answer
    }
}

function createFaq() {
  for(let i = 0; i < faqData.length; i++) {
    let createAccordion = document.createElement('div')
    let createHeadingDiv = document.createElement('div')
    let createShowBtn = document.createElement('div')
    let plusIcon = document.createElement('i')
    let heading = document.createElement('h3')
    let paragraph = document.createElement('p')

    createAccordion.className = 'faq'
    createHeadingDiv.className = 'faq_header'
    createShowBtn.className = 'show_btn'
    paragraph.className = 'hidden'
    plusIcon.setAttribute('value',i)
    plusIcon.classList.add('fa-solid', 'fa-plus')

    accordianBody.appendChild(createAccordion)
    createAccordion.appendChild(createHeadingDiv)
    createHeadingDiv.appendChild(heading)
    createHeadingDiv.appendChild(createShowBtn)
    createShowBtn.appendChild(plusIcon)
    createAccordion.appendChild(paragraph)
  }
  showFaq()
}
createFaq()

let show_btns = document.querySelectorAll('.show_btn')
let paragraph = document.querySelectorAll('p')
function btnStatusUpdate(e) {
  let currentItem = e.target
  let currentIcon = currentItem.getAttribute('value')

  if(currentIcon) {
    paragraph[currentIcon].classList.toggle('hidden')
  }
}

show_btns.forEach(function(item) {
    item.addEventListener('click', btnStatusUpdate)
})