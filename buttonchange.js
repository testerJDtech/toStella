let currentBlock = 0;
const blocks = document.querySelectorAll('.block');
const finishBtn = document.getElementById('finishBtn');

function showBlock(index) {
    blocks.forEach((block, i) => {
        block.classList.toggle('active', i === index);
    });

    if (index === blocks.length - 1) {
        finishBtn.style.display = 'block';
    }
    else {
        finishBtn.style.display = 'none';
    }
}

function showNextBlock() {
    currentBlock = (currentBlock + 1) % blocks.length;
    showBlock(currentBlock);
}

function showPrevBlock() {
    currentBlock = (currentBlock - 1 + blocks.length) % blocks.length;
    showBlock(currentBlock);
}

// function 

// Initialize the first block as visible
showBlock(currentBlock);