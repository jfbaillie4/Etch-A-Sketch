const howto = document.getElementById("how-to");
var drawing = true

function buildContainer (Squares) {
    document.body.firstChild.remove();
    var container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.insertBefore(container, howto);
    if (window.innerHeight >= window.innerWidth) {
        let width = Math.ceil(0.9*window.innerWidth);
        container.setAttribute("style", `width: ${width}px; height: ${width}px`);
        fillContainer(container, width, Squares); 
    } else {
        let height = Math.ceil(0.9*window.innerHeight);
        container.setAttribute("style", `width: ${height}px; height: ${height}px`);
        fillContainer(container, height, Squares);
    }
}

function fillContainer (ContainerName, ContainerSize, SquaresPerSide) {
    let SquareSize = (ContainerSize/SquaresPerSide);
    for (i=0; i < (SquaresPerSide*SquaresPerSide); i++) {
        let Square = document.createElement('div');
        Square.classList.add("square");
        Square.setAttribute("style", `width: ${SquareSize}px; height: ${SquareSize}px;`);
        ContainerName.appendChild(Square);
        Square.addEventListener('mouseover', Draw);
    }
    //window.squares = Array.from(document.querySelectorAll('.square'));
    //window.squares.forEach(square => square.addEventListener('mouseover', Draw));
    window.document.addEventListener('keydown', keyDownFunctions);
}

function Draw (e) {
    if (drawing === true) {e.target.classList.add("drawn")};
}

function keyDownFunctions (e) {
    if (e.key === "r") {
        const int_squares = Array.from(document.querySelectorAll('.square'));
        int_squares.forEach(square => square.classList.remove("drawn"));
    } else if ((e.key === " ") && (drawing === true)) {
        drawing = false;
    } else if ((e.key === " ") && (drawing === false)) {
        drawing = true;
    } else {
        return
    }
}

buildContainer(100);

const CanvasInput = document.getElementById("CanvasInput");
CanvasInput.addEventListener("change", function() {CanvasInput.value >200 ? alert("May not be over 200.") : buildContainer(CanvasInput.value)});

