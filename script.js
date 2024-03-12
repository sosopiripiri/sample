const loadingArea1 = document.querySelector('#loading');
const loadingArea2 = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',()=> {
    loadingArea1.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },

        {
            duration: 100,
            delay: 1200,
            easing: 'ease-out',
            fill: 'forwards',
        }
    );

loadingArea2.animate(
    {
        opacity: [1, 0],
        visibility: 'hidden',
    },

    {
        duration: 1800,
        delay: 800,
        easing: 'ease',
        fill: 'forwards',
    }
);

loadingText.animate(
    [
        {
            opacity: 1,
            offset: .8 //80%
        },

        {
            opacity: 0,
            offset: 1 //100%
        },
    ],

    {
        duration: 1200,
        easing: 'ease',
        fill: 'forwards',
    }
);
});


function showSquareButtons() {
    document.getElementById('glassButton').style.display = 'none';
    document.getElementById('glassButton2').style.display = 'block';
    document.getElementById('squareButtonsContainer').style.display = 'flex';
  }
  
  function showSquareButtons2() {
    document.getElementById('glassButton').style.display = 'block';
    document.getElementById('glassButton2').style.display = 'none';
    document.getElementById('squareButtonsContainer').style.display = 'none';
    document.getElementById('panelContainer1').style.display = 'none';
    document.getElementById('panelContainer2').style.display = 'none';
    document.getElementById('panelContainer3').style.display = 'none';
    document.getElementById('panelContainer4').style.display = 'none';
  }
  
  function showPanel1(panelText) {
    const panelContainer = document.getElementById('panelContainer1');
    panelContainer.style.display = 'flex';
    document.getElementById('panelContainer2').style.display = 'none';
    document.getElementById('panelContainer3').style.display = 'none';
    document.getElementById('panelContainer4').style.display = 'none';
  }
  function showPanel2(panelText) {
    const panelContainer = document.getElementById('panelContainer2');
    panelContainer.style.display = 'flex';
    document.getElementById('panelContainer1').style.display = 'none';
    document.getElementById('panelContainer3').style.display = 'none';
    document.getElementById('panelContainer4').style.display = 'none';

  }
  function showPanel3() {
    const panelContainer = document.getElementById('panelContainer3');
    panelContainer.style.display = 'flex';
    document.getElementById('panelContainer1').style.display = 'none';
    document.getElementById('panelContainer2').style.display = 'none';
    document.getElementById('panelContainer4').style.display = 'none';
  }
  function showPanel4(panelText) {
    const panelContainer = document.getElementById('panelContainer4');
    panelContainer.style.display = 'flex';
    document.getElementById('panelContainer1').style.display = 'none';
    document.getElementById('panelContainer2').style.display = 'none';
    document.getElementById('panelContainer3').style.display = 'none';
  }