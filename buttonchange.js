let currentBlock = 0;
const blocks = document.querySelectorAll('.block');

function showBlock(index) {
    blocks.forEach((block, i) => {
        block.classList.toggle('active', i === index);
    });
}

function showNextBlock() {
    currentBlock = (currentBlock + 1) % blocks.length;
    showBlock(currentBlock);
}

function showPrevBlock() {
    currentBlock = (currentBlock - 1 + blocks.length) % blocks.length;
    showBlock(currentBlock);
}

// Initialize the first block as visible
showBlock(currentBlock);